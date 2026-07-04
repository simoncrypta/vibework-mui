#!/usr/bin/env node
/**
 * Generates Storybook stories for MUI components and page patterns.
 *
 * Run: vp run generate:mui-stories
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "src/storybook/mui/generated");
const COMPONENTS_DIR = path.join(OUT, "components");
const PATTERNS_DIR = path.join(OUT, "patterns");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    for (const file of fs.readdirSync(dir)) {
      fs.unlinkSync(path.join(dir, file));
    }
  } else {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

/** @type {Array<{ name: string; description: string; client?: boolean; imports: string[]; stories: Array<{ export: string; title: string; body: string }> }>} */
const COMPONENTS = [
  {
    name: "Accordion",
    description: "Expand/collapse content sections.",
    client: true,
    imports: [
      'import Accordion from "@mui/material/Accordion";',
      'import AccordionDetails from "@mui/material/AccordionDetails";',
      'import AccordionSummary from "@mui/material/AccordionSummary";',
      'import Typography from "@mui/material/Typography";',
      'import ExpandMoreIcon from "@mui/icons-material/ExpandMore";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Section 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">Accordion content goes here.</Typography>
      </AccordionDetails>
    </Accordion>`,
      },
    ],
  },
  {
    name: "Alert",
    description: "Inline status messages.",
    imports: [
      'import Alert from "@mui/material/Alert";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Severities",
        title: "Severities",
        body: `<Stack spacing={1}>
      <Alert severity="success">Success alert</Alert>
      <Alert severity="info">Info alert</Alert>
      <Alert severity="warning">Warning alert</Alert>
      <Alert severity="error">Error alert</Alert>
    </Stack>`,
      },
    ],
  },
  {
    name: "Avatar",
    description: "User or entity thumbnails.",
    imports: [
      'import Avatar from "@mui/material/Avatar";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack direction="row" spacing={1}>
      <Avatar>AB</Avatar>
      <Avatar variant="rounded">R</Avatar>
      <Avatar variant="square">S</Avatar>
    </Stack>`,
      },
    ],
  },
  {
    name: "Badge",
    description: "Notification counts on icons or avatars.",
    imports: [
      'import Badge from "@mui/material/Badge";',
      'import MailIcon from "@mui/icons-material/Mail";',
    ],
    stories: [
      {
        export: "Standard",
        title: "Standard",
        body: `<Badge badgeContent={4} color="primary">
      <MailIcon />
    </Badge>`,
      },
    ],
  },
  {
    name: "Box",
    description: "Generic theme-aware container.",
    imports: [
      'import Box from "@mui/material/Box";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Box sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 1 }}>
      <Typography>Box with padding and border</Typography>
    </Box>`,
      },
    ],
  },
  {
    name: "Breadcrumbs",
    description: "Hierarchy navigation trail.",
    imports: [
      'import Breadcrumbs from "@mui/material/Breadcrumbs";',
      'import Link from "@mui/material/Link";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Breadcrumbs>
      <Link underline="hover" color="inherit" href="#">Home</Link>
      <Link underline="hover" color="inherit" href="#">Catalog</Link>
      <Typography color="text.primary">Product</Typography>
    </Breadcrumbs>`,
      },
    ],
  },
  {
    name: "Button",
    description: "Triggers an action when clicked.",
    imports: [
      'import Button from "@mui/material/Button";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Stack>`,
      },
      {
        export: "Sizes",
        title: "Sizes",
        body: `<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Stack>`,
      },
      {
        export: "Colors",
        title: "Colors",
        body: `<Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
      <Button color="primary" variant="contained">Primary</Button>
      <Button color="secondary" variant="contained">Secondary</Button>
      <Button color="success" variant="contained">Success</Button>
      <Button color="error" variant="contained">Error</Button>
    </Stack>`,
      },
    ],
  },
  {
    name: "ButtonGroup",
    description: "Grouped related buttons.",
    imports: [
      'import Button from "@mui/material/Button";',
      'import ButtonGroup from "@mui/material/ButtonGroup";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<ButtonGroup variant="contained">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>`,
      },
    ],
  },
  {
    name: "Card",
    description: "Elevated surface for grouped content.",
    imports: [
      'import Button from "@mui/material/Button";',
      'import Card from "@mui/material/Card";',
      'import CardActions from "@mui/material/CardActions";',
      'import CardContent from "@mui/material/CardContent";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Card variant="outlined" sx={{ maxWidth: 360 }}>
      <CardContent>
        <Typography variant="h6">Card title</Typography>
        <Typography color="text.secondary">Supporting text for the card.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Action</Button>
      </CardActions>
    </Card>`,
      },
    ],
  },
  {
    name: "Checkbox",
    description: "Multi-select boolean input.",
    imports: [
      'import Checkbox from "@mui/material/Checkbox";',
      'import FormControlLabel from "@mui/material/FormControlLabel";',
      'import FormGroup from "@mui/material/FormGroup";',
    ],
    stories: [
      {
        export: "States",
        title: "States",
        body: `<FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>`,
      },
    ],
  },
  {
    name: "Chip",
    description: "Compact labels and tags.",
    imports: ['import Chip from "@mui/material/Chip";', 'import Stack from "@mui/material/Stack";'],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
      <Chip label="Default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Success" color="success" variant="outlined" />
      <Chip label="Deletable" onDelete={() => {}} />
    </Stack>`,
      },
    ],
  },
  {
    name: "Progress",
    description: "Circular and linear loading indicators.",
    imports: [
      'import CircularProgress from "@mui/material/CircularProgress";',
      'import LinearProgress from "@mui/material/LinearProgress";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Circular",
        title: "Circular",
        body: `<CircularProgress />`,
      },
      {
        export: "Linear",
        title: "Linear",
        body: `<Stack spacing={2} sx={{ width: 240 }}>
      <LinearProgress />
      <LinearProgress variant="determinate" value={60} />
    </Stack>`,
      },
    ],
  },
  {
    name: "Divider",
    description: "Visual separation between sections.",
    imports: [
      'import Divider from "@mui/material/Divider";',
      'import Stack from "@mui/material/Stack";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Stack spacing={2} sx={{ maxWidth: 320 }}>
      <Typography>Above</Typography>
      <Divider />
      <Typography>Below</Typography>
    </Stack>`,
      },
    ],
  },
  {
    name: "Fab",
    description: "Primary floating action.",
    imports: [
      'import Fab from "@mui/material/Fab";',
      'import AddIcon from "@mui/icons-material/Add";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Fab color="primary"><AddIcon /></Fab>`,
      },
    ],
  },
  {
    name: "IconButton",
    description: "Icon-only action control.",
    imports: [
      'import IconButton from "@mui/material/IconButton";',
      'import DeleteIcon from "@mui/icons-material/Delete";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<IconButton aria-label="delete"><DeleteIcon /></IconButton>`,
      },
    ],
  },
  {
    name: "Link",
    description: "Themed anchor element.",
    imports: ['import Link from "@mui/material/Link";', 'import Stack from "@mui/material/Stack";'],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack spacing={1}>
      <Link href="#">Default link</Link>
      <Link href="#" underline="hover">Hover underline</Link>
      <Link href="#" underline="none">No underline</Link>
    </Stack>`,
      },
    ],
  },
  {
    name: "List",
    description: "Vertical index of items.",
    imports: [
      'import List from "@mui/material/List";',
      'import ListItem from "@mui/material/ListItem";',
      'import ListItemButton from "@mui/material/ListItemButton";',
      'import ListItemText from "@mui/material/ListItemText";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<List sx={{ width: 280 }}>
      <ListItem disablePadding><ListItemButton><ListItemText primary="Inbox" /></ListItemButton></ListItem>
      <ListItem disablePadding><ListItemButton><ListItemText primary="Drafts" /></ListItemButton></ListItem>
      <ListItem disablePadding><ListItemButton><ListItemText primary="Trash" /></ListItemButton></ListItem>
    </List>`,
      },
    ],
  },
  {
    name: "Pagination",
    description: "Page navigation control.",
    imports: ['import Pagination from "@mui/material/Pagination";'],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Pagination count={10} />`,
      },
    ],
  },
  {
    name: "Paper",
    description: "Elevated surface container.",
    imports: [
      'import Paper from "@mui/material/Paper";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Elevation",
        title: "Elevation",
        body: `<Stack direction="row" spacing={2}>
      <Paper elevation={1} sx={{ p: 2 }}><Typography>elevation 1</Typography></Paper>
      <Paper elevation={4} sx={{ p: 2 }}><Typography>elevation 4</Typography></Paper>
    </Stack>`,
      },
    ],
  },
  {
    name: "RadioGroup",
    description: "Single-select from a set.",
    imports: [
      'import FormControlLabel from "@mui/material/FormControlLabel";',
      'import Radio from "@mui/material/Radio";',
      'import RadioGroup from "@mui/material/RadioGroup";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<RadioGroup defaultValue="a" name="demo">
      <FormControlLabel value="a" control={<Radio />} label="Option A" />
      <FormControlLabel value="b" control={<Radio />} label="Option B" />
    </RadioGroup>`,
      },
    ],
  },
  {
    name: "Rating",
    description: "Star rating input.",
    client: true,
    imports: ['import Rating from "@mui/material/Rating";'],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Rating name="demo" defaultValue={3} />`,
      },
    ],
  },
  {
    name: "Select",
    description: "Dropdown selection from options.",
    imports: [
      'import FormControl from "@mui/material/FormControl";',
      'import InputLabel from "@mui/material/InputLabel";',
      'import MenuItem from "@mui/material/MenuItem";',
      'import Select from "@mui/material/Select";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<FormControl sx={{ minWidth: 160 }}>
      <InputLabel id="age-label">Age</InputLabel>
      <Select labelId="age-label" label="Age" defaultValue={10}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
    </FormControl>`,
      },
    ],
  },
  {
    name: "Skeleton",
    description: "Loading placeholder.",
    imports: [
      'import Skeleton from "@mui/material/Skeleton";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack spacing={1} sx={{ width: 240 }}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" height={80} />
    </Stack>`,
      },
    ],
  },
  {
    name: "Slider",
    description: "Select a value from a range.",
    client: true,
    imports: ['import Slider from "@mui/material/Slider";'],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Slider defaultValue={40} sx={{ width: 240 }} />`,
      },
    ],
  },
  {
    name: "Stack",
    description: "Vertical or horizontal layout.",
    imports: [
      'import Paper from "@mui/material/Paper";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Directions",
        title: "Directions",
        body: `<Stack direction="row" spacing={2}>
      <Paper sx={{ p: 2 }}>Item 1</Paper>
      <Paper sx={{ p: 2 }}>Item 2</Paper>
    </Stack>`,
      },
    ],
  },
  {
    name: "Stepper",
    description: "Multi-step progress indicator.",
    imports: [
      'import Step from "@mui/material/Step";',
      'import StepLabel from "@mui/material/StepLabel";',
      'import Stepper from "@mui/material/Stepper";',
    ],
    stories: [
      {
        export: "Horizontal",
        title: "Horizontal",
        body: `<Stepper activeStep={1} sx={{ maxWidth: 400 }}>
      <Step><StepLabel>Select</StepLabel></Step>
      <Step><StepLabel>Configure</StepLabel></Step>
      <Step><StepLabel>Review</StepLabel></Step>
    </Stepper>`,
      },
    ],
  },
  {
    name: "Switch",
    description: "Toggle a single setting.",
    imports: [
      'import FormControlLabel from "@mui/material/FormControlLabel";',
      'import Switch from "@mui/material/Switch";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<FormControlLabel control={<Switch defaultChecked />} label="Notifications" />`,
      },
    ],
  },
  {
    name: "Tabs",
    description: "Switch between views.",
    client: true,
    imports: ['import Tab from "@mui/material/Tab";', 'import Tabs from "@mui/material/Tabs";'],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Tabs value={0}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>`,
      },
    ],
  },
  {
    name: "TextField",
    description: "Text input with label and validation states.",
    imports: [
      'import Stack from "@mui/material/Stack";',
      'import TextField from "@mui/material/TextField";',
    ],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack spacing={2} sx={{ maxWidth: 320 }}>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Standard" variant="standard" />
    </Stack>`,
      },
      {
        export: "States",
        title: "States",
        body: `<Stack spacing={2} sx={{ maxWidth: 320 }}>
      <TextField label="Disabled" disabled defaultValue="Read only" />
      <TextField label="Error" error helperText="Invalid value" />
    </Stack>`,
      },
    ],
  },
  {
    name: "ToggleButton",
    description: "Selectable toggle in a group.",
    client: true,
    imports: [
      'import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";',
      'import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";',
      'import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";',
      'import ToggleButton from "@mui/material/ToggleButton";',
      'import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";',
    ],
    stories: [
      {
        export: "Exclusive",
        title: "Exclusive",
        body: `<ToggleButtonGroup exclusive value="left">
      <ToggleButton value="left"><FormatAlignLeftIcon /></ToggleButton>
      <ToggleButton value="center"><FormatAlignCenterIcon /></ToggleButton>
      <ToggleButton value="right"><FormatAlignRightIcon /></ToggleButton>
    </ToggleButtonGroup>`,
      },
    ],
  },
  {
    name: "Tooltip",
    description: "Hover/focus supplementary text.",
    imports: [
      'import Button from "@mui/material/Button";',
      'import Tooltip from "@mui/material/Tooltip";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Tooltip title="Tooltip text"><Button>Hover me</Button></Tooltip>`,
      },
    ],
  },
  {
    name: "Typography",
    description: "Theme-aware text styles.",
    imports: ['import Typography from "@mui/material/Typography";'],
    stories: [
      {
        export: "Variants",
        title: "Variants",
        body: `<Stack spacing={0.5}>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="body1">body1 text</Typography>
      <Typography variant="body2" color="text.secondary">body2 secondary</Typography>
    </Stack>`,
      },
    ],
  },
  {
    name: "Autocomplete",
    description: "Text input with suggested options.",
    client: true,
    imports: [
      'import Autocomplete from "@mui/material/Autocomplete";',
      'import TextField from "@mui/material/TextField";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Autocomplete
      options={["Option 1", "Option 2", "Option 3"]}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      sx={{ width: 280 }}
    />`,
      },
    ],
  },
  {
    name: "Dialog",
    description: "Modal dialog surface.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Button from "@mui/material/Button";',
      'import Dialog from "@mui/material/Dialog";',
      'import DialogActions from "@mui/material/DialogActions";',
      'import DialogContent from "@mui/material/DialogContent";',
      'import DialogTitle from "@mui/material/DialogTitle";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function DialogDemo() {
        const [open, setOpen] = useState(false);
        return (
          <>
            <Button variant="contained" onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogContent>Dialog content</DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </>
        );
      }
      return (
        <BlockStory>
          <DialogDemo />
        </BlockStory>
      );
    }`,
      },
    ],
  },
  {
    name: "AppBar",
    description: "Top application bar for branding and actions.",
    imports: [
      'import AppBar from "@mui/material/AppBar";',
      'import Toolbar from "@mui/material/Toolbar";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>App title</Typography>
      </Toolbar>
    </AppBar>`,
      },
    ],
  },
  {
    name: "Backdrop",
    description: "Focus-limiting overlay behind modals.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Backdrop from "@mui/material/Backdrop";',
      'import Button from "@mui/material/Button";',
      'import CircularProgress from "@mui/material/CircularProgress";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function BackdropDemo() {
        const [open, setOpen] = useState(false);
        return (
          <>
            <Button onClick={() => setOpen(true)}>Show backdrop</Button>
            <Backdrop open={open} onClick={() => setOpen(false)} sx={{ color: "#fff", zIndex: (t) => t.zIndex.drawer + 1 }}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </>
        );
      }
      return <BlockStory><BackdropDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "BottomNavigation",
    description: "Primary destinations on mobile layouts.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import BottomNavigation from "@mui/material/BottomNavigation";',
      'import BottomNavigationAction from "@mui/material/BottomNavigationAction";',
      'import FavoriteIcon from "@mui/icons-material/Favorite";',
      'import LocationOnIcon from "@mui/icons-material/LocationOn";',
      'import RestoreIcon from "@mui/icons-material/Restore";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function BottomNavDemo() {
        const [value, setValue] = useState(0);
        return (
          <BottomNavigation showLabels value={value} onChange={(_, v) => setValue(v)} sx={{ maxWidth: 360 }}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        );
      }
      return <BlockStory><BottomNavDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "ClickAwayListener",
    description: "Detect clicks outside a child element.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Box from "@mui/material/Box";',
      'import ClickAwayListener from "@mui/material/ClickAwayListener";',
      'import Paper from "@mui/material/Paper";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function ClickAwayDemo() {
        const [open, setOpen] = useState(false);
        return (
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box sx={{ position: "relative" }}>
              <Paper sx={{ p: 2, width: 200, cursor: "pointer" }} onClick={() => setOpen((v) => !v)}>
                <Typography>Click me</Typography>
              </Paper>
              {open ? (
                <Paper sx={{ position: "absolute", top: "100%", mt: 1, p: 1, width: 200 }}>
                  <Typography variant="body2">Click outside to close</Typography>
                </Paper>
              ) : null}
            </Box>
          </ClickAwayListener>
        );
      }
      return <BlockStory><ClickAwayDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "Container",
    description: "Center content horizontally with max-width.",
    imports: [
      'import Container from "@mui/material/Container";',
      'import Paper from "@mui/material/Paper";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Container maxWidth="sm">
      <Paper sx={{ p: 2 }}>
        <Typography>Centered container (maxWidth sm)</Typography>
      </Paper>
    </Container>`,
      },
    ],
  },
  {
    name: "CssBaseline",
    description: "Material Design baseline and reset.",
    imports: [
      'import CssBaseline from "@mui/material/CssBaseline";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<>
      <CssBaseline />
      <Typography>CssBaseline is active via Providers on every story.</Typography>
    </>`,
      },
    ],
  },
  {
    name: "Drawer",
    description: "Side navigation panel.",
    imports: [
      'import Box from "@mui/material/Box";',
      'import Drawer from "@mui/material/Drawer";',
      'import List from "@mui/material/List";',
      'import ListItemButton from "@mui/material/ListItemButton";',
      'import ListItemText from "@mui/material/ListItemText";',
      'import Toolbar from "@mui/material/Toolbar";',
    ],
    stories: [
      {
        export: "Permanent",
        title: "Permanent",
        body: `<Box sx={{ display: "flex", minHeight: 200 }}>
      <Drawer variant="permanent" sx={{ width: 200, ["& .MuiDrawer-paper"]: { width: 200, position: "relative" } }}>
        <Toolbar />
        <List>
          <ListItemButton selected><ListItemText primary="Inbox" /></ListItemButton>
          <ListItemButton><ListItemText primary="Starred" /></ListItemButton>
        </List>
      </Drawer>
      <Box sx={{ p: 2 }}>Main content</Box>
    </Box>`,
      },
    ],
  },
  {
    name: "Grid",
    description: "Responsive layout grid.",
    imports: ['import Grid from "@mui/material/Grid";', 'import Paper from "@mui/material/Paper";'],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Grid container spacing={2} sx={{ maxWidth: 480 }}>
      <Grid size={6}><Paper sx={{ p: 2, textAlign: "center" }}>6</Paper></Grid>
      <Grid size={6}><Paper sx={{ p: 2, textAlign: "center" }}>6</Paper></Grid>
      <Grid size={12}><Paper sx={{ p: 2, textAlign: "center" }}>12</Paper></Grid>
    </Grid>`,
      },
    ],
  },
  {
    name: "Icons",
    description: "Material Icons via @mui/icons-material.",
    imports: [
      'import DeleteIcon from "@mui/icons-material/Delete";',
      'import HomeIcon from "@mui/icons-material/Home";',
      'import SendIcon from "@mui/icons-material/Send";',
      'import Stack from "@mui/material/Stack";',
      'import SvgIcon from "@mui/material/SvgIcon";',
    ],
    stories: [
      {
        export: "Common",
        title: "Common",
        body: `<Stack direction="row" spacing={2}>
      <HomeIcon color="primary" />
      <SendIcon color="secondary" />
      <DeleteIcon color="error" />
      <SvgIcon color="action"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></SvgIcon>
    </Stack>`,
      },
    ],
  },
  {
    name: "ImageList",
    description: "Organized image grid.",
    imports: [
      'import ImageList from "@mui/material/ImageList";',
      'import ImageListItem from "@mui/material/ImageListItem";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<ImageList sx={{ width: 320, height: 200 }} cols={3} rowHeight={100}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ImageListItem key={item}>
          <div className="h-full w-full bg-muted" />
        </ImageListItem>
      ))}
    </ImageList>`,
      },
    ],
  },
  {
    name: "Masonry",
    description: "Masonry layout for variable-height content (@mui/lab).",
    imports: [
      'import Masonry from "@mui/lab/Masonry";',
      'import Paper from "@mui/material/Paper";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Masonry columns={3} spacing={1} sx={{ width: 360, maxWidth: "100%" }}>
      {[120, 80, 140, 100, 90, 130].map((height, i) => (
        <Paper key={i} sx={{ p: 1, height }}>{height}px</Paper>
      ))}
    </Masonry>`,
      },
    ],
  },
  {
    name: "Menu",
    description: "Temporary menu surface.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Button from "@mui/material/Button";',
      'import Menu from "@mui/material/Menu";',
      'import MenuItem from "@mui/material/MenuItem";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function MenuDemo() {
        const [anchor, setAnchor] = useState<null | HTMLElement>(null);
        return (
          <>
            <Button onClick={(e) => setAnchor(e.currentTarget)}>Open menu</Button>
            <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
              <MenuItem onClick={() => setAnchor(null)}>Profile</MenuItem>
              <MenuItem onClick={() => setAnchor(null)}>Settings</MenuItem>
            </Menu>
          </>
        );
      }
      return <BlockStory><MenuDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "Modal",
    description: "Low-level modal primitive.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Modal from "@mui/material/Modal";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function ModalDemo() {
        const [open, setOpen] = useState(false);
        return (
          <>
            <Button onClick={() => setOpen(true)}>Open modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", p: 3, borderRadius: 1, boxShadow: 24 }}>
                <Typography>Modal content</Typography>
              </Box>
            </Modal>
          </>
        );
      }
      return <BlockStory><ModalDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "Popover",
    description: "Anchored floating surface.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Button from "@mui/material/Button";',
      'import Popover from "@mui/material/Popover";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function PopoverDemo() {
        const [anchor, setAnchor] = useState<null | HTMLElement>(null);
        return (
          <>
            <Button onClick={(e) => setAnchor(e.currentTarget)}>Open popover</Button>
            <Popover open={Boolean(anchor)} anchorEl={anchor} onClose={() => setAnchor(null)} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
              <Typography sx={{ p: 2 }}>Popover content</Typography>
            </Popover>
          </>
        );
      }
      return <BlockStory><PopoverDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "Popper",
    description: "Positioned popper alternative to Popover.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Popper from "@mui/material/Popper";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function PopperDemo() {
        const [anchor, setAnchor] = useState<null | HTMLElement>(null);
        const open = Boolean(anchor);
        return (
          <>
            <Button onClick={(e) => setAnchor(anchor ? null : e.currentTarget)}>Toggle popper</Button>
            <Popper open={open} anchorEl={anchor} placement="bottom">
              <Box sx={{ border: 1, borderColor: "divider", p: 1, bgcolor: "background.paper" }}>
                <Typography variant="body2">Popper content</Typography>
              </Box>
            </Popper>
          </>
        );
      }
      return <BlockStory><PopperDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "Portal",
    description: "Render children into a DOM subtree outside the parent.",
    imports: [
      'import Portal from "@mui/material/Portal";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Portal>
      <Typography variant="body2" color="text.secondary">Rendered via Portal (check document body)</Typography>
    </Portal>`,
      },
    ],
  },
  {
    name: "Snackbar",
    description: "Brief feedback messages.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Alert from "@mui/material/Alert";',
      'import Button from "@mui/material/Button";',
      'import Snackbar from "@mui/material/Snackbar";',
    ],
    stories: [
      {
        export: "WithAlert",
        title: "With alert",
        rawRender: `() => {
      function SnackbarDemo() {
        const [open, setOpen] = useState(false);
        return (
          <>
            <Button onClick={() => setOpen(true)}>Show snackbar</Button>
            <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
              <Alert severity="success" variant="filled" sx={{ width: "100%" }}>Saved successfully</Alert>
            </Snackbar>
          </>
        );
      }
      return <BlockStory><SnackbarDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "SpeedDial",
    description: "Floating action with related actions.",
    client: true,
    imports: [
      'import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";',
      'import PrintIcon from "@mui/icons-material/Print";',
      'import ShareIcon from "@mui/icons-material/Share";',
      'import Box from "@mui/material/Box";',
      'import SpeedDial from "@mui/material/SpeedDial";',
      'import SpeedDialAction from "@mui/material/SpeedDialAction";',
      'import SpeedDialIcon from "@mui/material/SpeedDialIcon";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Box sx={{ height: 200, position: "relative" }}>
      <SpeedDial ariaLabel="SpeedDial" sx={{ position: "absolute", bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
        <SpeedDialAction icon={<FileCopyIcon />} slotProps={{ tooltip: { title: "Copy" } }} />
        <SpeedDialAction icon={<PrintIcon />} slotProps={{ tooltip: { title: "Print" } }} />
        <SpeedDialAction icon={<ShareIcon />} slotProps={{ tooltip: { title: "Share" } }} />
      </SpeedDial>
    </Box>`,
      },
    ],
  },
  {
    name: "Table",
    description: "Tabular data display.",
    imports: [
      'import Paper from "@mui/material/Paper";',
      'import Table from "@mui/material/Table";',
      'import TableBody from "@mui/material/TableBody";',
      'import TableCell from "@mui/material/TableCell";',
      'import TableContainer from "@mui/material/TableContainer";',
      'import TableHead from "@mui/material/TableHead";',
      'import TableRow from "@mui/material/TableRow";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<TableContainer component={Paper} sx={{ maxWidth: 400 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow><TableCell>Frozen yoghurt</TableCell><TableCell align="right">159</TableCell></TableRow>
          <TableRow><TableCell>Ice cream sandwich</TableCell><TableCell align="right">237</TableCell></TableRow>
        </TableBody>
      </Table>
    </TableContainer>`,
      },
    ],
  },
  {
    name: "TextareaAutosize",
    description: "Auto-growing textarea.",
    client: true,
    imports: ['import TextareaAutosize from "@mui/material/TextareaAutosize";'],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<TextareaAutosize minRows={3} placeholder="Type here…" style={{ width: 280, padding: 8 }} />`,
      },
    ],
  },
  {
    name: "Timeline",
    description: "Chronological event list (@mui/lab).",
    imports: [
      'import Timeline from "@mui/lab/Timeline";',
      'import TimelineConnector from "@mui/lab/TimelineConnector";',
      'import TimelineContent from "@mui/lab/TimelineContent";',
      'import TimelineDot from "@mui/lab/TimelineDot";',
      'import TimelineItem from "@mui/lab/TimelineItem";',
      'import TimelineSeparator from "@mui/lab/TimelineSeparator";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<Timeline position="alternate" sx={{ maxWidth: 400 }}>
      <TimelineItem>
        <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
        <TimelineContent><Typography>Created</Typography></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator><TimelineDot color="success" /><TimelineConnector /></TimelineSeparator>
        <TimelineContent><Typography>Shipped</Typography></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator><TimelineDot /></TimelineSeparator>
        <TimelineContent><Typography>Delivered</Typography></TimelineContent>
      </TimelineItem>
    </Timeline>`,
      },
    ],
  },
  {
    name: "TransferList",
    description: "Move items between two lists.",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Button from "@mui/material/Button";',
      'import Checkbox from "@mui/material/Checkbox";',
      'import List from "@mui/material/List";',
      'import ListItemButton from "@mui/material/ListItemButton";',
      'import ListItemIcon from "@mui/material/ListItemIcon";',
      'import ListItemText from "@mui/material/ListItemText";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        rawRender: `() => {
      function not(a: readonly number[], b: readonly number[]) {
        return a.filter((v) => !b.includes(v));
      }
      function intersection(a: readonly number[], b: readonly number[]) {
        return a.filter((v) => b.includes(v));
      }
      function TransferListDemo() {
        const [left, setLeft] = useState([0, 1, 2]);
        const [right, setRight] = useState<number[]>([3]);
        const [checked, setChecked] = useState<readonly number[]>([]);
        const leftChecked = intersection(checked, left);
        const rightChecked = intersection(checked, right);
        const handleToggle = (value: number) => () => {
          const i = checked.indexOf(value);
          setChecked(i === -1 ? [...checked, value] : checked.filter((v) => v !== value));
        };
        const customList = (items: readonly number[]) => (
          <List dense sx={{ width: 140, bgcolor: "background.paper", border: 1, borderColor: "divider", borderRadius: 1 }}>
            {items.map((value) => (
              <ListItemButton key={value} onClick={handleToggle(value)}>
                <ListItemIcon><Checkbox edge="start" checked={checked.includes(value)} tabIndex={-1} disableRipple /></ListItemIcon>
                <ListItemText primary={\`Item \${value + 1}\`} />
              </ListItemButton>
            ))}
          </List>
        );
        return (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            {customList(left)}
            <Stack spacing={1}>
              <Button size="small" variant="outlined" onClick={() => { setRight(right.concat(leftChecked)); setLeft(not(left, leftChecked)); setChecked(not(checked, leftChecked)); }} disabled={leftChecked.length === 0}>&gt;</Button>
              <Button size="small" variant="outlined" onClick={() => { setLeft(left.concat(rightChecked)); setRight(not(right, rightChecked)); setChecked(not(checked, rightChecked)); }} disabled={rightChecked.length === 0}>&lt;</Button>
            </Stack>
            {customList(right)}
          </Stack>
        );
      }
      return <BlockStory><TransferListDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "Transitions",
    description: "Enter and exit animations (Collapse, Fade, Grow).",
    client: true,
    imports: [
      'import { useState } from "react";',
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Collapse from "@mui/material/Collapse";',
      'import Fade from "@mui/material/Fade";',
      'import Grow from "@mui/material/Grow";',
      'import Stack from "@mui/material/Stack";',
    ],
    stories: [
      {
        export: "CollapseFadeGrow",
        title: "Collapse, Fade, Grow",
        rawRender: `() => {
      function TransitionsDemo() {
        const [show, setShow] = useState(true);
        return (
          <Stack spacing={2}>
            <Button size="small" onClick={() => setShow((v) => !v)}>Toggle</Button>
            <Collapse in={show}><Box sx={{ p: 2, bgcolor: "action.hover" }}>Collapse</Box></Collapse>
            <Fade in={show}><Box sx={{ p: 2, bgcolor: "action.hover" }}>Fade</Box></Fade>
            <Grow in={show}><Box sx={{ p: 2, bgcolor: "action.hover" }}>Grow</Box></Grow>
          </Stack>
        );
      }
      return <BlockStory><TransitionsDemo /></BlockStory>;
    }`,
      },
    ],
  },
  {
    name: "NoSsr",
    description: "Defer rendering to the client (useful for hydration-sensitive widgets).",
    imports: [
      'import Box from "@mui/material/Box";',
      'import NoSsr from "@mui/material/NoSsr";',
      'import Typography from "@mui/material/Typography";',
    ],
    stories: [
      {
        export: "Basic",
        title: "Basic",
        body: `<NoSsr>
      <Box sx={{ p: 2, border: 1, borderColor: "divider", borderRadius: 1 }}>
        <Typography variant="body2">This subtree renders only on the client.</Typography>
      </Box>
    </NoSsr>`,
      },
    ],
  },
  {
    name: "useMediaQuery",
    description: "React hook for CSS media queries.",
    client: true,
    imports: [
      'import Typography from "@mui/material/Typography";',
      'import useMediaQuery from "@mui/material/useMediaQuery";',
      'import { useTheme } from "@mui/material/styles";',
    ],
    stories: [
      {
        export: "Breakpoint",
        title: "Breakpoint",
        rawRender: `() => {
      function MediaQueryDemo() {
        const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.up("sm"));
        return <Typography>{matches ? "sm and up" : "below sm"}</Typography>;
      }
      return <BlockStory><MediaQueryDemo /></BlockStory>;
    }`,
      },
    ],
  },
];

/** @type {Array<{ name: string; group: string; title: string; description: string; client?: boolean; imports: string[]; body: string }>} */
const PATTERNS = [
  {
    name: "sign-in",
    group: "Auth",
    title: "Sign in",
    description:
      "Centered sign-in card — matches the MUI Sign-in template (email, password, remember me).",
    client: true,
    imports: [
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Checkbox from "@mui/material/Checkbox";',
      'import FormControlLabel from "@mui/material/FormControlLabel";',
      'import Link from "@mui/material/Link";',
      'import Stack from "@mui/material/Stack";',
      'import TextField from "@mui/material/TextField";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Box
      sx={{
        minHeight: 480,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
        bgcolor: "background.default",
      }}
    >
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 360 }}>
        <Typography component="h1" variant="h4" sx={{ textAlign: "center" }}>
          Sign in
        </Typography>
        <TextField label="Email address" type="email" fullWidth autoComplete="email" />
        <TextField label="Password" type="password" fullWidth autoComplete="current-password" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        <Button variant="contained" fullWidth size="large">
          Sign in
        </Button>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Don&apos;t have an account? <Link href="#">Sign up</Link>
        </Typography>
      </Stack>
    </Box>`,
  },
  {
    name: "sign-in-side",
    group: "Auth",
    title: "Sign in side",
    description:
      "Two-column sign-in — form on the left, branded panel on the right (MUI Sign-in side template).",
    client: true,
    imports: [
      'import Button from "@mui/material/Button";',
      'import Grid from "@mui/material/Grid";',
      'import Link from "@mui/material/Link";',
      'import Stack from "@mui/material/Stack";',
      'import TextField from "@mui/material/TextField";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Grid container sx={{ minHeight: 480 }}>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 4 }}
      >
        <Stack spacing={2} sx={{ width: "100%", maxWidth: 360 }}>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <TextField label="Email address" type="email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          <Button variant="contained" fullWidth size="large">
            Sign in
          </Button>
          <Typography variant="body2">
            <Link href="#">Forgot your password?</Link>
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          p: 6,
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <Typography variant="h4" gutterBottom>
          &ldquo;Build faster with Material UI.&rdquo;
        </Typography>
        <Typography variant="body1">
          Compose production-ready screens from the same components you browse in this catalog.
        </Typography>
      </Grid>
    </Grid>`,
  },
  {
    name: "sign-up",
    group: "Auth",
    title: "Sign up",
    description: "Registration form with name and credentials — MUI Sign-up template layout.",
    client: true,
    imports: [
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Link from "@mui/material/Link";',
      'import Stack from "@mui/material/Stack";',
      'import TextField from "@mui/material/TextField";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Box
      sx={{
        minHeight: 480,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Stack spacing={2} sx={{ width: "100%", maxWidth: 400 }}>
        <Typography component="h1" variant="h4" sx={{ textAlign: "center" }}>
          Sign up
        </Typography>
        <TextField label="Full name" fullWidth autoComplete="name" />
        <TextField label="Email address" type="email" fullWidth autoComplete="email" />
        <TextField label="Password" type="password" fullWidth autoComplete="new-password" />
        <Button variant="contained" fullWidth size="large">
          Create account
        </Button>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Already have an account? <Link href="#">Sign in</Link>
        </Typography>
      </Stack>
    </Box>`,
  },
  {
    name: "dashboard",
    group: "Dashboard",
    title: "Dashboard",
    description:
      "App bar, permanent drawer, and stat cards — simplified MUI Dashboard template (no MUI X).",
    imports: [
      'import AppBar from "@mui/material/AppBar";',
      'import Box from "@mui/material/Box";',
      'import Card from "@mui/material/Card";',
      'import CardContent from "@mui/material/CardContent";',
      'import Drawer from "@mui/material/Drawer";',
      'import Grid from "@mui/material/Grid";',
      'import List from "@mui/material/List";',
      'import ListItemButton from "@mui/material/ListItemButton";',
      'import ListItemIcon from "@mui/material/ListItemIcon";',
      'import ListItemText from "@mui/material/ListItemText";',
      'import Toolbar from "@mui/material/Toolbar";',
      'import Typography from "@mui/material/Typography";',
      'import DashboardIcon from "@mui/icons-material/Dashboard";',
      'import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";',
      'import PeopleIcon from "@mui/icons-material/People";',
    ],
    body: `<Box sx={{ display: "flex", flexDirection: "column", minHeight: 520 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="body2">Apr 4, 2026</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flex: 1 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: 220,
            flexShrink: 0,
            ["& .MuiDrawer-paper"]: { width: 220, boxSizing: "border-box", position: "relative" },
          }}
        >
          <List>
            <ListItemButton selected>
              <ListItemIcon><DashboardIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon><ShoppingCartIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon><PeopleIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}>
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          <Grid container spacing={2}>
            {[
              { label: "Total orders", value: "1,024" },
              { label: "Revenue", value: "$12,430" },
              { label: "Active users", value: "328" },
            ].map((stat) => (
              <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" variant="body2">
                      {stat.label}
                    </Typography>
                    <Typography variant="h5">{stat.value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>`,
  },
  {
    name: "crud-dashboard",
    group: "Dashboard",
    title: "CRUD dashboard",
    description:
      "Data table with toolbar actions — MUI CRUD template shape using core Table (not MUI X Data Grid).",
    imports: [
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Paper from "@mui/material/Paper";',
      'import Stack from "@mui/material/Stack";',
      'import Table from "@mui/material/Table";',
      'import TableBody from "@mui/material/TableBody";',
      'import TableCell from "@mui/material/TableCell";',
      'import TableContainer from "@mui/material/TableContainer";',
      'import TableHead from "@mui/material/TableHead";',
      'import TableRow from "@mui/material/TableRow";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Box sx={{ p: 3 }}>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">Products</Typography>
        <Button variant="contained">Add product</Button>
      </Stack>
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { id: 1, name: "Wireless mouse", price: 29, stock: 120 },
              { id: 2, name: "Mechanical keyboard", price: 89, stock: 45 },
              { id: 3, name: "USB-C hub", price: 49, stock: 78 },
            ].map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">\${row.price}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>`,
  },
  {
    name: "marketing-page",
    group: "Marketing",
    title: "Marketing page",
    description: "Hero + feature grid + CTA — MUI Marketing page template structure.",
    imports: [
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Card from "@mui/material/Card";',
      'import CardContent from "@mui/material/CardContent";',
      'import Container from "@mui/material/Container";',
      'import Grid from "@mui/material/Grid";',
      'import Stack from "@mui/material/Stack";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Box>
      <Box sx={{ bgcolor: "primary.main", color: "primary.contrastText", py: 8 }}>
        <Container maxWidth="md">
          <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography variant="h3" component="h1">
              Ship prototypes faster
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Figma to clickable UI with Material UI and Vibework.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="secondary" size="large">
                Get started
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                View docs
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {["Design tokens", "Component catalog", "Deploy anywhere"].map((title) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {title}
                  </Typography>
                  <Typography color="text.secondary">
                    Browse foundations and patterns in Storybook, then drop components into your app.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>`,
  },
  {
    name: "checkout",
    group: "Commerce",
    title: "Checkout",
    description: "Multi-step checkout with order summary — MUI Checkout template layout.",
    client: true,
    imports: [
      'import Box from "@mui/material/Box";',
      'import Button from "@mui/material/Button";',
      'import Divider from "@mui/material/Divider";',
      'import Grid from "@mui/material/Grid";',
      'import Paper from "@mui/material/Paper";',
      'import Stack from "@mui/material/Stack";',
      'import Step from "@mui/material/Step";',
      'import StepLabel from "@mui/material/StepLabel";',
      'import Stepper from "@mui/material/Stepper";',
      'import TextField from "@mui/material/TextField";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Box sx={{ p: 3, maxWidth: 960, mx: "auto" }}>
      <Stepper activeStep={1} sx={{ mb: 4 }}>
        {["Shipping", "Payment", "Review"].map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h6" gutterBottom>
            Payment details
          </Typography>
          <Stack spacing={2}>
            <TextField label="Name on card" fullWidth />
            <TextField label="Card number" fullWidth />
            <Stack direction="row" spacing={2}>
              <TextField label="Expiry" fullWidth />
              <TextField label="CVC" fullWidth />
            </Stack>
            <Button variant="contained">Next</Button>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography>Subtotal</Typography>
                <Typography>$118.00</Typography>
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography>Shipping</Typography>
                <Typography>$12.00</Typography>
              </Stack>
              <Divider />
              <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography sx={{ fontWeight: 600 }}>Total</Typography>
                <Typography sx={{ fontWeight: 600 }}>$130.00</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>`,
  },
  {
    name: "blog",
    group: "Content",
    title: "Blog",
    description: "Featured post and article grid — MUI Blog template layout.",
    imports: [
      'import Box from "@mui/material/Box";',
      'import Card from "@mui/material/Card";',
      'import CardContent from "@mui/material/CardContent";',
      'import CardMedia from "@mui/material/CardMedia";',
      'import Chip from "@mui/material/Chip";',
      'import Container from "@mui/material/Container";',
      'import Grid from "@mui/material/Grid";',
      'import Stack from "@mui/material/Stack";',
      'import Typography from "@mui/material/Typography";',
    ],
    body: `<Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Chip label="Featured" size="small" sx={{ mb: 1 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Designing with Material UI in Storybook
          </Typography>
          <Typography color="text.secondary" variant="subtitle1">
            Browse components, switch light/dark themes, and copy patterns into your Vibework app.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {[
            { title: "Theme tokens", date: "Mar 12" },
            { title: "RSC client islands", date: "Mar 8" },
            { title: "Deploy on Cloudflare", date: "Feb 28" },
          ].map((post) => (
            <Grid key={post.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardMedia
                  component="div"
                  sx={{ height: 120, bgcolor: "action.hover" }}
                />
                <CardContent>
                  <Typography variant="overline" sx={{ display: "block" }} color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="h6">{post.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>`,
  },
];

function uniqueImports(lines) {
  return [...new Set(lines)].sort((a, b) => a.localeCompare(b));
}

function writeComponentStory(component) {
  const needsStack = component.stories.some(
    (s) => s.body?.includes("<Stack") || s.rawRender?.includes("Stack"),
  );
  const baseImports = ['import Stack from "@mui/material/Stack";'];
  const allImports = uniqueImports([
    ...component.imports,
    ...(needsStack && !component.imports.some((i) => i.includes("Stack")) ? baseImports : []),
  ]);

  const storyBlocks = component.stories
    .map((story) => {
      if (story.rawRender) {
        return `export const ${story.export}: Story = {
  name: ${JSON.stringify(story.title)},
  render: ${story.rawRender},
};`;
      }

      return `export const ${story.export}: Story = {
  name: ${JSON.stringify(story.title)},
  render: () => (
    <BlockStory>
      ${story.body}
    </BlockStory>
  ),
};`;
    })
    .join("\n\n");

  const clientDirective = component.client ? `"use client";\n\n` : "";

  const content = `/* eslint-disable */
// Generated by scripts/generate-mui-stories.mjs — do not edit manually.
${clientDirective}
import type { Meta, StoryObj } from "@storybook/react-vite";

import { BlockStory } from "../../shared/block-story";
${allImports.join("\n")}

const meta = {
  title: "MUI/Components/${component.name}",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: \`${escapeString(component.description)}\`,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

${storyBlocks}
`;

  fs.writeFileSync(path.join(COMPONENTS_DIR, `${component.name}.stories.tsx`), content);
}

function writePatternStory(pattern) {
  const clientDirective = pattern.client ? `"use client";\n\n` : "";
  const title = `MUI/Patterns/${pattern.group}/${pattern.title}`;

  const content = `/* eslint-disable */
// Generated by scripts/generate-mui-stories.mjs — do not edit manually.
${clientDirective}
import type { Meta, StoryObj } from "@storybook/react-vite";

${pattern.imports.join("\n")}

const meta = {
  title: ${JSON.stringify(title)},
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: ${JSON.stringify(pattern.description)},
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {
  render: () => (${pattern.body}),
};
`;

  fs.writeFileSync(path.join(PATTERNS_DIR, `${pattern.name}.stories.tsx`), content);
}

function main() {
  ensureDir(OUT);
  cleanDir(COMPONENTS_DIR);
  cleanDir(PATTERNS_DIR);

  for (const component of COMPONENTS) {
    writeComponentStory(component);
  }

  for (const pattern of PATTERNS) {
    writePatternStory(pattern);
  }

  console.log(`Generated ${COMPONENTS.length} component story files`);
  console.log(`Generated ${PATTERNS.length} pattern story files`);
}

main();
