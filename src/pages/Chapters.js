import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import Chip from "@mui/material/Chip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Chapters Name",
  },
  // {
  //   id: "calories",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Releted Subject",
  // },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Published By",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Total Topics",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="start"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function Chapters() {
  const [rows, setChapters] = React.useState([]);
  
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // Dilog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [grade, setGrade] = React.useState("");
  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };

  const [subject, setSubject] = React.useState("");
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  //Fetch Subject
  const [subjects, setSubjects] = React.useState([]);
  async function fetchSubjects() {
    const response = await fetch("http://localhost:5000/api/subject");
    const json = await response.json();
    setSubjects(json);
  } //Fetch Subject

  React.useEffect(() => {
    fetchSubjects();
  }, []);

  //Fetch Grade
  const [grades, setGrades] = React.useState([]);
  async function fetchGrades() {
    const response = await fetch("http://localhost:5000/api/grade");
    const json = await response.json();
    setGrades(json);
  } //Fetch Grade

  React.useEffect(() => {
    fetchGrades();
  }, []);

  const [name, setName] = React.useState("");

  //Create Chapter Post Request
  async function createChapter() {
    const response = await fetch("http://localhost:5000/api/chapter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        grade: grade,
        subject: subject,
      }),
    });
    const json = await response.json();
    console.log(json);
  }

  //Get Chapters
  async function fetchChapters() {
    const response = await fetch("http://localhost:5000/api/chapter");
    const json = await response.json();
    setChapters(json);
  } //Get Chapters

  React.useEffect(() => {
    fetchChapters();
  }, []);

  //Delete Chapter
  async function deleteChapter(id) {
    const response = await fetch(`http://localhost:5000/api/chapter/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      fetchChapters();
    }
  }

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px 0px 10px #00000029",
        borderRadius: 3,
      }}
    >
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subject</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </DialogContentText>
          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              mt: 3,
            }}
          >
            Chapter Name
          </InputLabel>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            size="small"
            fullWidth
            variant="outlined"
            value={name}
            hiddenLabel
            onChange={(e) => setName(e.target.value)}
          />

          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              mt: 3,
            }}
          >
            Subject
          </InputLabel>

          <Select
            id="demo-simple-select"
            size="small"
            dense
            sx={{
              width: "100%",
            }}
            value={subject}
            hiddenLabel
            onChange={handleChangeSubject}
          >
            {subjects.map((subject) => (
              <MenuItem value={subject.subject_name} key={subject._id}>
                {subject.subject_name}
              </MenuItem>
            ))}
          </Select>

          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              mt: 3,
            }}
          >
            Grade
          </InputLabel>

          <Select
            id="demo-simple-select"
            size="small"
            dense
            sx={{
              width: "100%",
            }}
            value={grade}
            hiddenLabel
            onChange={handleChangeGrade}
          >
            {grades.map((grade) => (
              <MenuItem value={grade.grade_name} key={grade._id}>
                {grade.grade_name}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={createChapter}>Create</Button>
        </DialogActions>
      </Dialog>

      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(selected.length > 0 && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.activatedOpacity
                ),
            }),
          }}
        >
          {selected.length > 0 ? (
            <Typography
              sx={{ flex: "1 1 100%" }}
              color="inherit"
              variant="subtitle1"
              component="div"
            >
              {selected.length} selected
            </Typography>
          ) : (
            <>
              <Button variant="outlined" size="small" onClick={handleClickOpen}>
                New Chapter
              </Button>
              <Typography sx={{ flex: "1 1" }} />
            </>
          )}

          {/* Edit */}
          {selected.length === 1 ? (
            <Tooltip title="View">
              <IconButton>
                <RemoveRedEyeIcon />
              </IconButton>
            </Tooltip>
          ) : (
            ""
          )}

          {/* View */}
          {selected.length === 1 ? (
            <Tooltip title="Edit">
              <IconButton>
                <ModeEditIcon />
              </IconButton>
            </Tooltip>
          ) : (
            ""
          )}

          {/* Delte */}
          {selected.length > 0 ? (
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row._id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      {/* <TableCell align="start">{row.calories}</TableCell> */}
                      <TableCell align="start">
                        <Chip label="Harsh" />
                        {/* <Chip label="Hindi" /> */}
                      </TableCell>
                      <TableCell align="start">{row.grade}</TableCell>
                      <TableCell align="start">
                        {/* Chip */}
                        <Chip
                          label={row.status}
                          variant="outlined"
                          sx={{ width: 80 }}
                          color={row.status == "active" ? "success" : "error"}
                        />
                      </TableCell>
                      <TableCell align="start">
                        <Tooltip title="View">
                          <IconButton onClick={() => deleteChapter(row._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
