# Full-Stack React, Python, and GraphQL (Part 3)

> Github Repositories

- [full-stack-react-python-and-graphql](https://github.com/peelmicro/full-stack-react-python-and-graphql).

The [Full-Stack React, Python, and GraphQL](https://www.udemy.com/full-stack-react-python-and-graphql/) Udemy course helps develop impressive, rich full-stack apps with the latest and greatest features of Python, React and GraphQL.

> Other parts:

- [Full-Stack React, Python, and GraphQL (Part 1)](./graphql-full-stack-react-python-and-graphql.md)
- [Full-Stack React, Python, and GraphQL (Part 2)](./graphql-full-stack-react-python-and-graphql-2.md)

> Table of contents
> [[toc]]

## What I've learned

- How to build stunning, complete full-stack applications with React and Python
- Create robust Python backends with the Django Web Framework
- Integrate GraphQL with Python using Graphene and Graphene-Django
- Use GraphQL in great depth; from fundamental concepts to using it in full-stack apps
- The latest and greatest React concepts, including React Hooks, React Context and more
- Working with GraphQL on the backend to create a complete API (w/ Django and Graphene)
- GraphQL in React applications in great depth with Apollo Boost, Apollo Client and Apollo Client State

### 47. Building CreateTrack Button / Dialog 6min

- We need to modify the `components/Track/TrackList` component to add Create Track button and the Dialog that will be shown when we click on it. We are also going to use the `components/Track/CreateTrack` component.

> components/Track/CreateTrack.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const CreateTrack = ({ classes }) => {
  return (
    <>
      {/* Create Track Button */}
      <Button variant="fab" className={classes.fab} color="secondary">
        <AddIcon />
      </Button>
      {/* Create Track Dialog */}
      <Dialog open={true} className={classes.dialog}>
        <form>
          <DialogTitle>Create Track</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a Title, Description & Audio File
            </DialogContentText>
            <FormControl fullWidth>
              <TextField
                label="Title"
                placeholder="Add Title"
                className={classes.textField}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                multiline
                rows="4"
                label="Description"
                placeholder="Add Description"
                className={classes.textField}
              />
            </FormControl>
            <FormControl>
              <input
                id="audio"
                required
                type="file"
                className={classes.input}
              />
              <label htmlFor="audio">
                <Button
                  variant="outlined"
                  color="inherit"
                  component="span"
                  className={classes.button}
                >
                  Audio File
                  <LibraryMusicIcon className={classes.icon} />
                </Button>
              </label>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button className={classes.cancel}>Cancel</Button>
            <Button type="submit" className={classes.save}>
              Add Track
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

> components/Track/TrackList.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import AudioPlayer from "../Shared/AudioPlayer";
import LikeTrack from "./LikeTrack";
import DeleteTrack from "./DeleteTrack";
import UpdateTrack from "./UpdateTrack";

const TrackList = ({ classes, tracks }) => (
  <List>
    {tracks.map(track => (
      <ExpansionPanel key={track.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <ListItem className={classes.root}>
            <LikeTrack />
            <ListItemText
              primaryTypographyProps={{
                variant: "subheading",
                color: "primary"
              }}
              primary={track.title}
              secondary={
                <Link
                  className={classes.link}
                  to={`/profile/${track.postedBy.id}`}
                >
                  {track.postedBy.username}
                </Link>
              }
            />
            <AudioPlayer />
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body1">{track.description}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <UpdateTrack track={track} />
          <DeleteTrack track={track} />
        </ExpansionPanelActions>
      </ExpansionPanel>
    ))}
  </List>
);

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    alignItems: "center"
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black"
    }
  }
};

export default withStyles(styles)(TrackList);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingCreateTrackButtonDialog.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingCreateTrackButtonDialog2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingCreateTrackButtonDialog3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingCreateTrackButtonDialog4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingCreateTrackButtonDialog5.png)

### 48. Improving CreateTrack Dialog 9min

- We need to modify the `components/Track/CreateTrack` component to improve the functionality.

> components/Track/CreateTrack.js

```js
import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const CreateTrack = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      {/* Create Track Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="fab"
        className={classes.fab}
        color="secondary"
      >
        {open ? <ClearIcon /> : <AddIcon />}
      </Button>
      {/* Create Track Dialog */}
      <Dialog open={open} className={classes.dialog}>
        <form>
          <DialogTitle>Create Track</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a Title, Description & Audio File
            </DialogContentText>
            <FormControl fullWidth>
              <TextField
                label="Title"
                placeholder="Add Title"
                onChange={event => setTitle(event.target.value)}
                className={classes.textField}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                multiline
                rows="4"
                label="Description"
                placeholder="Add Description"
                onChange={event => setDescription(event.target.value)}
                className={classes.textField}
              />
            </FormControl>
            <FormControl>
              <input
                id="audio"
                required
                type="file"
                accept="audio/mp3,audio/wav"
                className={classes.input}
                onChange={handleAudioChange}
              />
              <label htmlFor="audio">
                <Button
                  variant="outlined"
                  color={file ? "secondary" : "inherit"}
                  component="span"
                  className={classes.button}
                >
                  Audio File
                  <LibraryMusicIcon className={classes.icon} />
                </Button>
                {file && file.name}
              </label>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} className={classes.cancel}>
              Cancel
            </Button>
            <Button
              disabled={!title.trim() || !description.trim() || !file}
              type="submit"
              className={classes.save}
            >
              Add Track
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/ImprovingCreateTrackDialog.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ImprovingCreateTrackDialog2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ImprovingCreateTrackDialog3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ImprovingCreateTrackDialog4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ImprovingCreateTrackDialog5.png)

### 49. Audio Uploads / Creating New Tracks 15min

- We are going to use [Cloudinary](https://cloudinary.com) to upload the track files.

- Once we've finished with the `sign up` process we have to access the [Cloudinary Console](https://cloudinary.com/console) and click on `Settings`

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks.png)

- Click on `Upload`

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks2.png)

- Scroll down to the `Upload presets:` area and click on `Add upload preset`

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks3.png)

- Put the name `react-tracks` to the `Upload preset name` and select `Unsigned` for the `Signing mode`.

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks4.png)

- Click the `Save` button.

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks5.png)

- Click the `Save` button.

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks7.png)

- We need to modify the `components/Track/CreateTrack` component to include what we need to create the `Create Track Mutation`.

> components/Track/CreateTrack.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import Error from "../Shared/Error";

const CreateTrack = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, createTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    createTrack({ variables: { title, description, url: uploadedUrl } });
  };

  return (
    <>
      {/* Create Track Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="fab"
        className={classes.fab}
        color="secondary"
      >
        {open ? <ClearIcon /> : <AddIcon />}
      </Button>
      {/* Create Track Dialog */}
      <Mutation
        mutation={CREATE_TRACK_MUTATION}
        onCompleted={data => {
          console.log({ data });
          setSubmitting(true);
          setOpen(false);
          setTitle("");
          setDescription("");
          setFile("");
        }}
      >
        {(createTrack, { loading, error }) => {
          if (error) return <Error error={error} />;

          return (
            <Dialog open={open} className={classes.dialog}>
              <form onSubmit={event => handleSubmit(event, createTrack)}>
                <DialogTitle>Create Track</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a Title, Description & Audio File
                  </DialogContentText>
                  <FormControl fullWidth>
                    <TextField
                      label="Title"
                      placeholder="Add Title"
                      onChange={event => setTitle(event.target.value)}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows="4"
                      label="Description"
                      placeholder="Add Description"
                      onChange={event => setDescription(event.target.value)}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl>
                    <input
                      id="audio"
                      required
                      type="file"
                      accept="audio/mp3,audio/wav"
                      className={classes.input}
                      onChange={handleAudioChange}
                    />
                    <label htmlFor="audio">
                      <Button
                        variant="outlined"
                        color={file ? "secondary" : "inherit"}
                        component="span"
                        className={classes.button}
                      >
                        Audio File
                        <LibraryMusicIcon className={classes.icon} />
                      </Button>
                      {file && file.name}
                    </label>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button
                    disabled={submitting}
                    onClick={() => setOpen(false)}
                    className={classes.cancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={
                      submitting ||
                      !title.trim() ||
                      !description.trim() ||
                      !file
                    }
                    type="submit"
                    className={classes.save}
                  >
                    {submitting ? (
                      <CircularProgress className={classes.save} size={24} />
                    ) : (
                      "Add Track"
                    )}{" "}
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          );
        }}
      </Mutation>
    </>
  );
};

const CREATE_TRACK_MUTATION = gql`
  mutation($title: String!, $description: String!, $url: String!) {
    createTrack(title: $title, description: $description, url: $url) {
      track {
        id
        title
        description
        url
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

- We can test if it is working.

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks8.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks9.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks10.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks11.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks12.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks13.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks14.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AudioUploadsCreatingNewTracks15.png)

### 50. RefetchQueries to Update UI After Mutation 3min

- We need to modify the `components/Track/CreateTrack` component to make the page with the tracks update inmediately a new track is created. We can use the `refetchQueries` property of the `Mutation` to accomplish this.

> components/Track/CreateTrack.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { GET_TRACKS_QUERY } from "../../pages/App";
import Error from "../Shared/Error";

const CreateTrack = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, createTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    createTrack({ variables: { title, description, url: uploadedUrl } });
  };

  return (
    <>
      {/* Create Track Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="fab"
        className={classes.fab}
        color="secondary"
      >
        {open ? <ClearIcon /> : <AddIcon />}
      </Button>
      {/* Create Track Dialog */}
      <Mutation
        mutation={CREATE_TRACK_MUTATION}
        onCompleted={data => {
          console.log({ data });
          setSubmitting(true);
          setOpen(false);
          setTitle("");
          setDescription("");
          setFile("");
        }}
        refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
      >
        {(createTrack, { loading, error }) => {
          if (error) return <Error error={error} />;

          return (
            <Dialog open={open} className={classes.dialog}>
              <form onSubmit={event => handleSubmit(event, createTrack)}>
                <DialogTitle>Create Track</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a Title, Description & Audio File
                  </DialogContentText>
                  <FormControl fullWidth>
                    <TextField
                      label="Title"
                      placeholder="Add Title"
                      onChange={event => setTitle(event.target.value)}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows="4"
                      label="Description"
                      placeholder="Add Description"
                      onChange={event => setDescription(event.target.value)}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl>
                    <input
                      id="audio"
                      required
                      type="file"
                      accept="audio/mp3,audio/wav"
                      className={classes.input}
                      onChange={handleAudioChange}
                    />
                    <label htmlFor="audio">
                      <Button
                        variant="outlined"
                        color={file ? "secondary" : "inherit"}
                        component="span"
                        className={classes.button}
                      >
                        Audio File
                        <LibraryMusicIcon className={classes.icon} />
                      </Button>
                      {file && file.name}
                    </label>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button
                    disabled={submitting}
                    onClick={() => setOpen(false)}
                    className={classes.cancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={
                      submitting ||
                      !title.trim() ||
                      !description.trim() ||
                      !file
                    }
                    type="submit"
                    className={classes.save}
                  >
                    {submitting ? (
                      <CircularProgress className={classes.save} size={24} />
                    ) : (
                      "Add Track"
                    )}{" "}
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          );
        }}
      </Mutation>
    </>
  );
};

const CREATE_TRACK_MUTATION = gql`
  mutation($title: String!, $description: String!, $url: String!) {
    createTrack(title: $title, description: $description, url: $url) {
      track {
        id
        title
        description
        url
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/RefetchQueriesToUpdateUIAfterMutation.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/RefetchQueriesToUpdateUIAfterMutation2.png)

- There is another way to refresh the records that will be seen later.

### 51. Uncontrolled vs Controlled Components / Setting File Upload Limit 8min

- We need to modify the `components/Track/CreateTrack` component to set a limit for the audio file.

> components/Track/CreateTrack.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { GET_TRACKS_QUERY } from "../../pages/App";
import Error from "../Shared/Error";

const CreateTrack = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    const fileSizeLimit = 10000000; // 10mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: File size too large`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, createTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    createTrack({ variables: { title, description, url: uploadedUrl } });
  };

  return (
    <>
      {/* Create Track Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="fab"
        className={classes.fab}
        color="secondary"
      >
        {open ? <ClearIcon /> : <AddIcon />}
      </Button>
      {/* Create Track Dialog */}
      <Mutation
        mutation={CREATE_TRACK_MUTATION}
        onCompleted={data => {
          console.log({ data });
          setSubmitting(false);
          setOpen(false);
          setTitle("");
          setDescription("");
          setFile("");
        }}
        refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
      >
        {(createTrack, { loading, error }) => {
          if (error) return <Error error={error} />;

          return (
            <Dialog open={open} className={classes.dialog}>
              <form onSubmit={event => handleSubmit(event, createTrack)}>
                <DialogTitle>Create Track</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a Title, Description & Audio File (Under 10MB)
                  </DialogContentText>
                  <FormControl fullWidth>
                    <TextField
                      label="Title"
                      placeholder="Add Title"
                      onChange={event => setTitle(event.target.value)}
                      value={title}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows="4"
                      label="Description"
                      placeholder="Add Description"
                      onChange={event => setDescription(event.target.value)}
                      value={description}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl error={Boolean(fileError)}>
                    <input
                      id="audio"
                      required
                      type="file"
                      accept="audio/mp3,audio/wav"
                      className={classes.input}
                      onChange={handleAudioChange}
                    />
                    <label htmlFor="audio">
                      <Button
                        variant="outlined"
                        color={file ? "secondary" : "inherit"}
                        component="span"
                        className={classes.button}
                      >
                        Audio File
                        <LibraryMusicIcon className={classes.icon} />
                      </Button>
                      {file && file.name}
                      <FormHelperText>{fileError}</FormHelperText>
                    </label>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button
                    disabled={submitting}
                    onClick={() => setOpen(false)}
                    className={classes.cancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={
                      submitting ||
                      !title.trim() ||
                      !description.trim() ||
                      !file
                    }
                    type="submit"
                    className={classes.save}
                  >
                    {submitting ? (
                      <CircularProgress className={classes.save} size={24} />
                    ) : (
                      "Add Track"
                    )}{" "}
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          );
        }}
      </Mutation>
    </>
  );
};

const CREATE_TRACK_MUTATION = gql`
  mutation($title: String!, $description: String!, $url: String!) {
    createTrack(title: $title, description: $description, url: $url) {
      track {
        id
        title
        description
        url
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit2.png)

- Now all the data fields are cleared out.

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit5.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UncontrolledVsControlledComponentsSettingFileUploadLimit7.png)

### 52. Add Ability to Play / Download Uploaded Audio Files 3min

- We need to modify the `components/Shared/AudioPlayer` component to be able to play an stored audio track.

> components/Shared/AudioPlayer.js

```js
import React from "react";
import ReactPlayer from "react-player";

const AudioPlayer = ({ url }) => (
  <div>
    <ReactPlayer url={url} height="30px" width="500px" controls={true} />
  </div>
);

export default AudioPlayer;
```

- We need also to modify the the `components/Track/TrackList` component to send the Url of the track to the AudioTrack component.

> components/Track/TrackList.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import AudioPlayer from "../Shared/AudioPlayer";
import LikeTrack from "./LikeTrack";
import DeleteTrack from "./DeleteTrack";
import UpdateTrack from "./UpdateTrack";

const TrackList = ({ classes, tracks }) => (
  <List>
    {tracks.map(track => (
      <ExpansionPanel key={track.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <ListItem className={classes.root}>
            <LikeTrack />
            <ListItemText
              primaryTypographyProps={{
                variant: "subheading",
                color: "primary"
              }}
              primary={track.title}
              secondary={
                <Link
                  className={classes.link}
                  to={`/profile/${track.postedBy.id}`}
                >
                  {track.postedBy.username}
                </Link>
              }
            />
            <AudioPlayer url={track.url} />
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body1">{track.description}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <UpdateTrack track={track} />
          <DeleteTrack track={track} />
        </ExpansionPanelActions>
      </ExpansionPanel>
    ))}
  </List>
);

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    alignItems: "center"
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black"
    }
  }
};

export default withStyles(styles)(TrackList);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddAbilityToPlayDownloadUploadedAudioFiles.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AddAbilityToPlayDownloadUploadedAudioFiles2.png)

### 53. Add Search Tracks Component / Functionality 9min

- We need to modify the `components/Track/SearchTracks` component to be able to search for any track.

> components/Track/SearchTracks.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes }) => {
  return (
    <form>
      <Paper className={classes.root} elevation={1}>
        <IconButton>
          <ClearIcon />
        </IconButton>
        <TextField
          fullWidth
          placeholder="Search All Tracks"
          InputProps={{
            disableUnderline: true
          }}
        />
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddSearchTracksComponent.png)

- We need to improve the `components/Track/SearchTracks` component to include the clear the text search and the search tracks features. We are going to use the `Apollo Consumer` component.

> components/Track/SearchTracks.js

```js
import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event, client) => {
    event.preventDefault();
    const res = await client.query({
      query: SEARCH_TRACKS_QUERY,
      variables: { search }
    });
    console.log({ res });
  };
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <Paper className={classes.root} elevation={1}>
            <IconButton>
              <ClearIcon />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Search All Tracks"
              InputProps={{
                disableUnderline: true
              }}
              onChange={event => setSearch(event.target.value)}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    </ApolloConsumer>
  );
};

const SEARCH_TRACKS_QUERY = gql`
  query($search: String) {
    tracks(search: $search) {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/AddSearchTracksComponent2.png)

### 54. Updating Track List According to Search Results 7min

- We need to improve the `components/Track/SearchTracks` and the `App` components to Keep track of what we've searched.

> components/Track/SearchTracks.js

```js
import React, { useState } from "react";
import { ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes, setSearchResults }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event, client) => {
    event.preventDefault();
    const res = await client.query({
      query: SEARCH_TRACKS_QUERY,
      variables: { search }
    });
    setSearchResults(res.data.tracks);
  };
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <Paper className={classes.root} elevation={1}>
            <IconButton>
              <ClearIcon />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Search All Tracks"
              InputProps={{
                disableUnderline: true
              }}
              onChange={event => setSearch(event.target.value)}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    </ApolloConsumer>
  );
};

const SEARCH_TRACKS_QUERY = gql`
  query($search: String) {
    tracks(search: $search) {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
```

> App.js

```js
import React, { useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";

import SearchTracks from "../components/Track/SearchTracks";
import TrackList from "../components/Track/TrackList";
import CreateTrack from "../components/Track/CreateTrack";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

const App = ({ classes }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className={classes.container}>
      <SearchTracks setSearchResults={setSearchResults} />
      <CreateTrack />
      <Query query={GET_TRACKS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error error={error} />;
          const tracks = searchResults.length > 0 ? searchResults : data.tracks;

          return <TrackList tracks={tracks} />;
        }}
      </Query>
    </div>
  );
};

export const GET_TRACKS_QUERY = gql`
  query getTracksQuery {
    tracks {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTrackListAccordingToSearchResults.png)

- We need to improve the `components/Track/SearchTracks` and the `App` components to make the clear button work.

> components/Track/SearchTracks.js

```js
import React, { useState, useRef } from "react";
import { ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes, setSearchResults }) => {
  const [search, setSearch] = useState("");
  const inputEl = useRef();

  const clearSearchInput = () => {
    setSearchResults([]);
    setSearch("");
    inputEl.current.focus();
  };

  const handleSubmit = async (event, client) => {
    event.preventDefault();
    const res = await client.query({
      query: SEARCH_TRACKS_QUERY,
      variables: { search }
    });
    setSearchResults(res.data.tracks);
  };
  return (
    <ApolloConsumer>
      {client => (
        <form onSubmit={event => handleSubmit(event, client)}>
          <Paper className={classes.root} elevation={1}>
            <IconButton onClick={clearSearchInput}>
              <ClearIcon />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Search All Tracks"
              InputProps={{
                disableUnderline: true
              }}
              onChange={event => setSearch(event.target.value)}
              value={search}
              inputRef={inputEl}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    </ApolloConsumer>
  );
};

const SEARCH_TRACKS_QUERY = gql`
  query($search: String) {
    tracks(search: $search) {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTrackListAccordingToSearchResults2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTrackListAccordingToSearchResults3.png)

### 55. Updating Tracks 9min

- We need to modify the `components/Track/UpdateTrack` component to be able to update the current information about a track.

> components/Track/UpdateTrack.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { GET_TRACKS_QUERY } from "../../pages/App";
import Error from "../Shared/Error";

const UpdateTrack = ({ classes, track }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(track.title);
  const [description, setDescription] = useState(track.description);
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    const fileSizeLimit = 10000000; // 10mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: File size too large`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, updateTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    updateTrack({
      variables: { trackId: track.id, title, description, url: uploadedUrl }
    });
  };

  return (
    <>
      {/* Update Track Button */}
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>

      {/* Update Track Dialog */}
      <Mutation
        mutation={UPDATE_TRACK_MUTATION}
        onCompleted={data => {
          console.log({ data });
          setSubmitting(false);
          setOpen(false);
          setTitle("");
          setDescription("");
          setFile("");
        }}
        // refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
      >
        {(updateTrack, { loading, error }) => {
          if (error) return <Error error={error} />;

          return (
            <Dialog open={open} className={classes.dialog}>
              <form onSubmit={event => handleSubmit(event, updateTrack)}>
                <DialogTitle>Update Track</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a Title, Description & Audio File (Under 10MB)
                  </DialogContentText>
                  <FormControl fullWidth>
                    <TextField
                      label="Title"
                      placeholder="Add Title"
                      onChange={event => setTitle(event.target.value)}
                      value={title}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows="4"
                      label="Description"
                      placeholder="Add Description"
                      onChange={event => setDescription(event.target.value)}
                      value={description}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl error={Boolean(fileError)}>
                    <input
                      id="audio"
                      required
                      type="file"
                      accept="audio/mp3,audio/wav"
                      className={classes.input}
                      onChange={handleAudioChange}
                    />
                    <label htmlFor="audio">
                      <Button
                        variant="outlined"
                        color={file ? "secondary" : "inherit"}
                        component="span"
                        className={classes.button}
                      >
                        Audio File
                        <LibraryMusicIcon className={classes.icon} />
                      </Button>
                      {file && file.name}
                      <FormHelperText>{fileError}</FormHelperText>
                    </label>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button
                    disabled={submitting}
                    onClick={() => setOpen(false)}
                    className={classes.cancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={
                      submitting ||
                      !title.trim() ||
                      !description.trim() ||
                      !file
                    }
                    type="submit"
                    className={classes.save}
                  >
                    {submitting ? (
                      <CircularProgress className={classes.save} size={24} />
                    ) : (
                      "Update Track"
                    )}
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          );
        }}
      </Mutation>
    </>
  );
};

const UPDATE_TRACK_MUTATION = gql`
  mutation($trackId: Int!, $title: String, $url: String, $description: String) {
    updateTrack(
      trackId: $trackId
      title: $title
      url: $url
      description: $description
    ) {
      track {
        id
        title
        description
        url
        likes {
          id
        }
        postedBy {
          id
          username
        }
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

export default withStyles(styles)(UpdateTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTracks.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTracks2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTracks3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTracks4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTracks5.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingTracks6.png)

### 56. Using React Context / useContext to Avoid Props Drilling 10min

- We need to use the `React Context` to create the context about the use and beinf able to use it trhough the different components. We need to modify the `Root` component to create the User Context by using `createContext`

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";

export const UserContext = React.createContext();

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <Error error={error} />;
      const currentUser = data.me;
      console.log(currentUser);
      return (
        <Router>
          <UserContext.Provider value={currentUser}>
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </UserContext.Provider>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

- We need to modify the `components/Track/UpdateTrack` component to avoid the users who didn't create the track being able to update it.

> components/Track/UpdateTrack.js

```js
import React, { useState, useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { GET_TRACKS_QUERY } from "../../pages/App";
import { UserContext } from "../../Root";
import Error from "../Shared/Error";

const UpdateTrack = ({ classes, track }) => {
  const currentUser = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(track.title);
  const [description, setDescription] = useState(track.description);
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");
  const isCurrentUser = currentUser.id === track.postedBy.id;

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    const fileSizeLimit = 10000000; // 10mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: File size too large`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, updateTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    updateTrack({
      variables: { trackId: track.id, title, description, url: uploadedUrl }
    });
  };

  return (
    isCurrentUser && (
      <>
        {/* Update Track Button */}
        <IconButton onClick={() => setOpen(true)}>
          <EditIcon />
        </IconButton>

        {/* Update Track Dialog */}
        <Mutation
          mutation={UPDATE_TRACK_MUTATION}
          onCompleted={data => {
            console.log({ data });
            setSubmitting(false);
            setOpen(false);
            setTitle("");
            setDescription("");
            setFile("");
          }}
          // refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
        >
          {(updateTrack, { loading, error }) => {
            if (error) return <Error error={error} />;

            return (
              <Dialog open={open} className={classes.dialog}>
                <form onSubmit={event => handleSubmit(event, updateTrack)}>
                  <DialogTitle>Update Track</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Add a Title, Description & Audio File (Under 10MB)
                    </DialogContentText>
                    <FormControl fullWidth>
                      <TextField
                        label="Title"
                        placeholder="Add Title"
                        onChange={event => setTitle(event.target.value)}
                        value={title}
                        className={classes.textField}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <TextField
                        multiline
                        rows="4"
                        label="Description"
                        placeholder="Add Description"
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                        className={classes.textField}
                      />
                    </FormControl>
                    <FormControl error={Boolean(fileError)}>
                      <input
                        id="audio"
                        required
                        type="file"
                        accept="audio/mp3,audio/wav"
                        className={classes.input}
                        onChange={handleAudioChange}
                      />
                      <label htmlFor="audio">
                        <Button
                          variant="outlined"
                          color={file ? "secondary" : "inherit"}
                          component="span"
                          className={classes.button}
                        >
                          Audio File
                          <LibraryMusicIcon className={classes.icon} />
                        </Button>
                        {file && file.name}
                        <FormHelperText>{fileError}</FormHelperText>
                      </label>
                    </FormControl>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      disabled={submitting}
                      onClick={() => setOpen(false)}
                      className={classes.cancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      disabled={
                        submitting ||
                        !title.trim() ||
                        !description.trim() ||
                        !file
                      }
                      type="submit"
                      className={classes.save}
                    >
                      {submitting ? (
                        <CircularProgress className={classes.save} size={24} />
                      ) : (
                        "Update Track"
                      )}
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            );
          }}
        </Mutation>
      </>
    )
  );
};

const UPDATE_TRACK_MUTATION = gql`
  mutation($trackId: Int!, $title: String, $url: String, $description: String) {
    updateTrack(
      trackId: $trackId
      title: $title
      url: $url
      description: $description
    ) {
      track {
        id
        title
        description
        url
        likes {
          id
        }
        postedBy {
          id
          username
        }
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

export default withStyles(styles)(UpdateTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UsingReactContextUseContextToAvoidPropsDrilling.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UsingReactContextUseContextToAvoidPropsDrilling2.png)

### 57. Deleting Tracks 7min

- We need to modify the `components/Track/DeleteTrack` component to be able to delete the current track.

> components/Track/UpdateTrack.js

```js
import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import IconButton from "@material-ui/core/IconButton";
import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";

import { UserContext } from "../../Root";
import { GET_TRACKS_QUERY } from "../../pages/App";

const DeleteTrack = ({ track }) => {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser.id === track.postedBy.id;
  return (
    isCurrentUser && (
      <Mutation
        mutation={DELETE_TRACK_MUTATION}
        variables={{ trackId: track.id }}
        onCompleted={data => {
          console.log({ data });
        }}
        refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
      >
        {deleteTrack => (
          <IconButton onClick={deleteTrack}>
            <TrashIcon />
          </IconButton>
        )}
      </Mutation>
    )
  );
};

const DELETE_TRACK_MUTATION = gql`
  mutation($trackId: Int!) {
    deleteTrack(trackId: $trackId) {
      trackId
    }
  }
`;

export default DeleteTrack;
```

![](/images/other/graphql-full-stack-react-python-and-graphql/DeletingTracks.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/DeletingTracks2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/DeletingTracks3.png)

### 58. Creating Likes / Liking Tracks 6min

- We need to modify the `components/Track/TrackList` component to pass the `track Id` and the `number of likes` to the `LikeTrack` component.

> components/Track/TrackList.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import AudioPlayer from "../Shared/AudioPlayer";
import LikeTrack from "./LikeTrack";
import DeleteTrack from "./DeleteTrack";
import UpdateTrack from "./UpdateTrack";

const TrackList = ({ classes, tracks }) => (
  <List>
    {tracks.map(track => (
      <ExpansionPanel key={track.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <ListItem className={classes.root}>
            <LikeTrack trackId={track.id} likeCount={track.likes.length} />
            <ListItemText
              primaryTypographyProps={{
                variant: "subheading",
                color: "primary"
              }}
              primary={track.title}
              secondary={
                <Link
                  className={classes.link}
                  to={`/profile/${track.postedBy.id}`}
                >
                  {track.postedBy.username}
                </Link>
              }
            />
            <AudioPlayer url={track.url} />
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body1">{track.description}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <UpdateTrack track={track} />
          <DeleteTrack track={track} />
        </ExpansionPanelActions>
      </ExpansionPanel>
    ))}
  </List>
);

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    alignItems: "center"
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black"
    }
  }
};

export default withStyles(styles)(TrackList);
```

- We need to modify the `components/Track/LikeTrack` component to let the users to click on the like button when they like the track. The user should be allowed to just click once.

> components/Track/LikeTrack.js

```js
import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const LikeTrack = ({ classes, trackId, likeCount }) => {
  return (
    <Mutation
      mutation={CREATE_LIKE_MUTATION}
      variables={{ trackId }}
      onCompleted={data => {
        console.log({ data });
      }}
    >
      {createLike => (
        <IconButton
          onClick={event => {
            event.stopPropagation();
            createLike();
          }}
          className={classes.iconButton}
        >
          {likeCount}
          <ThumbUpIcon className={classes.icon} />
        </IconButton>
      )}
    </Mutation>
  );
};

const styles = theme => ({
  iconButton: {
    color: "deeppink"
  },
  icon: {
    marginLeft: theme.spacing.unit / 2
  }
});

const CREATE_LIKE_MUTATION = gql`
  mutation($trackId: Int!) {
    createLike(trackId: $trackId) {
      track {
        id
        likes {
          id
        }
      }
    }
  }
`;

export default withStyles(styles)(LikeTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingLikesLikingTracks.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingLikesLikingTracks2.png)

### 59. Disabling Multiple Likes Per Track 8min

- We need to modify the `Root` component to include the `likeSet` field on the `ME_QUERY` query.

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";

export const UserContext = React.createContext();

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <Error error={error} />;
      const currentUser = data.me;
      console.log(currentUser);
      return (
        <Router>
          <UserContext.Provider value={currentUser}>
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </UserContext.Provider>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
      likeSet {
        track {
          id
        }
      }
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

- We need to modify the `components/Track/LikeTrack` component to disable the like button when th user has already click on it.

> components/Track/LikeTrack.js

```js
import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { UserContext, ME_QUERY } from "../../Root";

const LikeTrack = ({ classes, trackId, likeCount }) => {
  const currentUser = useContext(UserContext);

  const handleDisableLikedTrack = () => {
    const userLikes = currentUser.likeSet;
    const isTrackLiked =
      userLikes.findIndex(({ track }) => track.id === trackId) > -1;
    return isTrackLiked;
  };

  return (
    <Mutation
      mutation={CREATE_LIKE_MUTATION}
      variables={{ trackId }}
      onCompleted={data => {
        console.log({ data });
      }}
      refetchQueries={() => [{ query: ME_QUERY }]}
    >
      {createLike => (
        <IconButton
          onClick={event => {
            event.stopPropagation();
            createLike();
          }}
          className={classes.iconButton}
          disabled={handleDisableLikedTrack()}
        >
          {likeCount}
          <ThumbUpIcon className={classes.icon} />
        </IconButton>
      )}
    </Mutation>
  );
};

const styles = theme => ({
  iconButton: {
    color: "deeppink"
  },
  icon: {
    marginLeft: theme.spacing.unit / 2
  }
});

const CREATE_LIKE_MUTATION = gql`
  mutation($trackId: Int!) {
    createLike(trackId: $trackId) {
      track {
        id
        likes {
          id
        }
      }
    }
  }
`;

export default withStyles(styles)(LikeTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/DisablingMultipleLikesPerTrack.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/DisablingMultipleLikesPerTrack2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/DisablingMultipleLikesPerTrack3.png)

### 60. Understanding the Apollo Cache / Update vs. RefetchQueries 4min

- Apollo clients comes with `cache`. We can look at the `cache` looking into the `Apollo Web Tools`

![](/images/other/graphql-full-stack-react-python-and-graphql/UnderstandingTheApolloCacheUpdateVsRefetchQueries.png)

- We can use the `update` function of the `Mutation` component to update the cache instead of using the `refetchQueries` function. The main reason is it is quite more efficient when we delete or create any data. It gets/updates the data from the cache instead of getting it from the server.

- We need to modify the `components/Track/UpdateTrack` component to remove the import of the `GET_TRACKS_QUERY` because it is not used at all.

> components/Track/UpdateTrack.js

```js
import React, { useState, useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { UserContext } from "../../Root";
import Error from "../Shared/Error";

const UpdateTrack = ({ classes, track }) => {
  const currentUser = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(track.title);
  const [description, setDescription] = useState(track.description);
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");
  const isCurrentUser = currentUser.id === track.postedBy.id;

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    const fileSizeLimit = 10000000; // 10mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: File size too large`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleSubmit = async (event, updateTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    updateTrack({
      variables: { trackId: track.id, title, description, url: uploadedUrl }
    });
  };

  return (
    isCurrentUser && (
      <>
        {/* Update Track Button */}
        <IconButton onClick={() => setOpen(true)}>
          <EditIcon />
        </IconButton>

        {/* Update Track Dialog */}
        <Mutation
          mutation={UPDATE_TRACK_MUTATION}
          onCompleted={data => {
            console.log({ data });
            setSubmitting(false);
            setOpen(false);
            setTitle("");
            setDescription("");
            setFile("");
          }}
          // refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
        >
          {(updateTrack, { loading, error }) => {
            if (error) return <Error error={error} />;

            return (
              <Dialog open={open} className={classes.dialog}>
                <form onSubmit={event => handleSubmit(event, updateTrack)}>
                  <DialogTitle>Update Track</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Add a Title, Description & Audio File (Under 10MB)
                    </DialogContentText>
                    <FormControl fullWidth>
                      <TextField
                        label="Title"
                        placeholder="Add Title"
                        onChange={event => setTitle(event.target.value)}
                        value={title}
                        className={classes.textField}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <TextField
                        multiline
                        rows="4"
                        label="Description"
                        placeholder="Add Description"
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                        className={classes.textField}
                      />
                    </FormControl>
                    <FormControl error={Boolean(fileError)}>
                      <input
                        id="audio"
                        required
                        type="file"
                        accept="audio/mp3,audio/wav"
                        className={classes.input}
                        onChange={handleAudioChange}
                      />
                      <label htmlFor="audio">
                        <Button
                          variant="outlined"
                          color={file ? "secondary" : "inherit"}
                          component="span"
                          className={classes.button}
                        >
                          Audio File
                          <LibraryMusicIcon className={classes.icon} />
                        </Button>
                        {file && file.name}
                        <FormHelperText>{fileError}</FormHelperText>
                      </label>
                    </FormControl>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      disabled={submitting}
                      onClick={() => setOpen(false)}
                      className={classes.cancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      disabled={
                        submitting ||
                        !title.trim() ||
                        !description.trim() ||
                        !file
                      }
                      type="submit"
                      className={classes.save}
                    >
                      {submitting ? (
                        <CircularProgress className={classes.save} size={24} />
                      ) : (
                        "Update Track"
                      )}
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            );
          }}
        </Mutation>
      </>
    )
  );
};

const UPDATE_TRACK_MUTATION = gql`
  mutation($trackId: Int!, $title: String, $url: String, $description: String) {
    updateTrack(
      trackId: $trackId
      title: $title
      url: $url
      description: $description
    ) {
      track {
        id
        title
        description
        url
        likes {
          id
        }
        postedBy {
          id
          username
        }
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

export default withStyles(styles)(UpdateTrack);
```

### 61. Updating our Cache upon Creating Tracks 6min

- We need to modify the `components/Track/CreateTrack` component to use the `update` function of the `Mutation` component instead of using the `refetchQueries` function.

> components/Track/CreateTrack.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { GET_TRACKS_QUERY } from "../../pages/App";
import Error from "../Shared/Error";

const CreateTrack = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleAudioChange = event => {
    const selectedFile = event.target.files[0];
    const fileSizeLimit = 10000000; // 10mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: File size too large`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleAudioUpload = async () => {
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", "react-tracks");
      data.append("cloud_name", "peelmicro");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/peelmicro/raw/upload",
        data
      );
      return res.data.url;
    } catch (err) {
      console.error("Error uploading file", err);
      setSubmitting(false);
    }
  };

  const handleUpdateCache = (cache, { data: { createTrack } }) => {
    const data = cache.readQuery({ query: GET_TRACKS_QUERY });
    const tracks = data.tracks.concat(createTrack.track);
    cache.writeQuery({ query: GET_TRACKS_QUERY, data: { tracks } });
  };

  const handleSubmit = async (event, createTrack) => {
    event.preventDefault();
    setSubmitting(true);
    // upload our audio file, get returned url from API
    const uploadedUrl = await handleAudioUpload();
    createTrack({ variables: { title, description, url: uploadedUrl } });
  };

  return (
    <>
      {/* Create Track Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="fab"
        className={classes.fab}
        color="secondary"
      >
        {open ? <ClearIcon /> : <AddIcon />}
      </Button>
      {/* Create Track Dialog */}
      <Mutation
        mutation={CREATE_TRACK_MUTATION}
        onCompleted={data => {
          console.log({ data });
          setSubmitting(false);
          setOpen(false);
          setTitle("");
          setDescription("");
          setFile("");
        }}
        update={handleUpdateCache}
        // refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
      >
        {(createTrack, { loading, error }) => {
          if (error) return <Error error={error} />;

          return (
            <Dialog open={open} className={classes.dialog}>
              <form onSubmit={event => handleSubmit(event, createTrack)}>
                <DialogTitle>Create Track</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Add a Title, Description & Audio File (Under 10MB)
                  </DialogContentText>
                  <FormControl fullWidth>
                    <TextField
                      label="Title"
                      placeholder="Add Title"
                      onChange={event => setTitle(event.target.value)}
                      value={title}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows="4"
                      label="Description"
                      placeholder="Add Description"
                      onChange={event => setDescription(event.target.value)}
                      value={description}
                      className={classes.textField}
                    />
                  </FormControl>
                  <FormControl error={Boolean(fileError)}>
                    <input
                      id="audio"
                      required
                      type="file"
                      accept="audio/mp3,audio/wav"
                      className={classes.input}
                      onChange={handleAudioChange}
                    />
                    <label htmlFor="audio">
                      <Button
                        variant="outlined"
                        color={file ? "secondary" : "inherit"}
                        component="span"
                        className={classes.button}
                      >
                        Audio File
                        <LibraryMusicIcon className={classes.icon} />
                      </Button>
                      {file && file.name}
                      <FormHelperText>{fileError}</FormHelperText>
                    </label>
                  </FormControl>
                </DialogContent>
                <DialogActions>
                  <Button
                    disabled={submitting}
                    onClick={() => setOpen(false)}
                    className={classes.cancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={
                      submitting ||
                      !title.trim() ||
                      !description.trim() ||
                      !file
                    }
                    type="submit"
                    className={classes.save}
                  >
                    {submitting ? (
                      <CircularProgress className={classes.save} size={24} />
                    ) : (
                      "Add Track"
                    )}{" "}
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          );
        }}
      </Mutation>
    </>
  );
};

const CREATE_TRACK_MUTATION = gql`
  mutation($title: String!, $description: String!, $url: String!) {
    createTrack(title: $title, description: $description, url: $url) {
      track {
        id
        title
        description
        url
        likes {
          id
        }
        postedBy {
          id
          username
        }
      }
    }
  }
`;

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingOurCacheUponCreatingTracks.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingOurCacheUponCreatingTracks2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingOurCacheUponCreatingTracks3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingOurCacheUponCreatingTracks4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingOurCacheUponCreatingTracks5.png)

### 62. Updating Cache upon Deleting Tracks 7min

- We need to modify the `components/Track/DeleteTrack` component to use the `update` function of the `Mutation` component instead of using the `refetchQueries` function.

> components/Track/DeleteTrack.js

```js
import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import IconButton from "@material-ui/core/IconButton";
import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";

import { UserContext } from "../../Root";
import { GET_TRACKS_QUERY } from "../../pages/App";

const DeleteTrack = ({ track }) => {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser.id === track.postedBy.id;

  const handleUpdateCache = (cache, { data: { deleteTrack } }) => {
    const data = cache.readQuery({ query: GET_TRACKS_QUERY });
    const index = data.tracks.findIndex(
      track => Number(track.id) === deleteTrack.trackId
    );
    // data.tracks.splice(index, 1)
    const tracks = [
      ...data.tracks.slice(0, index),
      ...data.tracks.slice(index + 1)
    ];
    cache.writeQuery({ query: GET_TRACKS_QUERY, data: { tracks } });
  };

  return (
    isCurrentUser && (
      <Mutation
        mutation={DELETE_TRACK_MUTATION}
        variables={{ trackId: track.id }}
        onCompleted={data => {
          console.log({ data });
        }}
        update={handleUpdateCache}
        // refetchQueries={() => [{ query: GET_TRACKS_QUERY }]}
      >
        {deleteTrack => (
          <IconButton onClick={deleteTrack}>
            <TrashIcon />
          </IconButton>
        )}
      </Mutation>
    )
  );
};

const DELETE_TRACK_MUTATION = gql`
  mutation($trackId: Int!) {
    deleteTrack(trackId: $trackId) {
      trackId
    }
  }
`;

export default DeleteTrack;
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingCacheUponDeletingTracks.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingCacheUponDeletingTracks2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/UpdatingCacheUponDeletingTracks3.png)

### 63. Modifying Fetching Behavior of Queries with Fetch-Policy 5min

- We need to modify the way the data is got from Apollo cache when we sign out, because the new user data that has logged in is got from the Apollo cache instead of the server.

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy2.png)

- The header contains information from the previous user as it gets the data from the cache.

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy3.png)

- If we reload the page, it gets the data from the server:

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy5.png)

- We need to modify the `Root` page to use the `fetchPolicy` function of the `Query` component. By default `fetchPolicy` ha a value of `cache-first` that must be changed to `cache-and-network`

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";

export const UserContext = React.createContext();

const Root = () => (
  <Query query={ME_QUERY} fetchPolicy="cache-and-network">
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <Error error={error} />;
      const currentUser = data.me;
      console.log(currentUser);
      return (
        <Router>
          <UserContext.Provider value={currentUser}>
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </UserContext.Provider>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
      likeSet {
        track {
          id
        }
      }
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy7.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ModifyingFetchingBehaviorOfQueriesWithFetchPolicy8.png)

### 64. Building Users' Profile Page 13min

- We are going to use a `Query` like the following to get all the data from the `User`

> Request

```graphql
{
  user(id: 2) {
    id
    username
    dateJoined
    likeSet {
      id
      track {
        id
        title
        url
        likes {
          id
        }
        postedBy {
          id
          username
        }
      }
    }
    trackSet {
      id
      title
      url
      likes {
        id
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "user": {
      "id": "2",
      "username": "Juan",
      "dateJoined": "2019-03-31T09:34:08.602017+00:00",
      "likeSet": [
        {
          "id": "4",
          "track": {
            "id": "7",
            "title": "Boccherini Concerto",
            "url": "http://res.cloudinary.com/peelmicro/raw/upload/v1554959191/cflv7vm3gvgxhbxwha4y.mp3",
            "likes": [
              {
                "id": "4"
              }
            ],
            "postedBy": {
              "id": "2",
              "username": "Juan"
            }
          }
        },
        {
          "id": "5",
          "track": {
            "id": "5",
            "title": "Hayden Cello Concerto",
            "url": "http://res.cloudinary.com/peelmicro/raw/upload/v1555597634/snaccethhsw0nkmzupvi.mp3",
            "likes": [
              {
                "id": "3"
              },
              {
                "id": "5"
              }
            ],
            "postedBy": {
              "id": "2",
              "username": "Juan"
            }
          }
        }
      ],
      "trackSet": [
        {
          "id": "5",
          "title": "Hayden Cello Concerto",
          "url": "http://res.cloudinary.com/peelmicro/raw/upload/v1555597634/snaccethhsw0nkmzupvi.mp3",
          "likes": [
            {
              "id": "3"
            },
            {
              "id": "5"
            }
          ]
        },
        {
          "id": "7",
          "title": "Boccherini Concerto",
          "url": "http://res.cloudinary.com/peelmicro/raw/upload/v1554959191/cflv7vm3gvgxhbxwha4y.mp3",
          "likes": [
            {
              "id": "4"
            }
          ]
        },
        {
          "id": "8",
          "title": "Tchaikovsky Nocturne",
          "url": "http://res.cloudinary.com/peelmicro/raw/upload/v1554959834/nkrv49nzisbjsapc32f3.mp3",
          "likes": []
        }
      ]
    }
  }
}
```

- We can see from the `React` tools that we have access to the `match` property that allows us to get to know the `id` of the user.

* We need to modify the `pages/Profile` page to let the user to update their personal data.

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingUsersProfilePage.png)

> pages/Profile.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUpTwoTone";
import AudiotrackIcon from "@material-ui/icons/AudiotrackTwoTone";
import Divider from "@material-ui/core/Divider";
import format from "date-fns/format";

import AudioPlayer from "../components/Shared/AudioPlayer";
import Error from "../components/Shared/Error";
import Loading from "../components/Shared/Loading";

const Profile = ({ classes, match }) => {
  const id = match.params.id;
  return (
    <Query query={PROFILE_QUERY} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <Error error={error} />;

        return (
          <div>
            {/* User Info Card */}
            <Card className={classes.card}>
              <CardHeader
                avatar={<Avatar>{data.user.username[0]}</Avatar>}
                title={data.user.username}
                subheader={`Joined ${format(
                  data.user.dateJoined,
                  "MMM Do, YYYY"
                )}`}
              />
            </Card>

            {/* Created Tracks */}
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="title" className={classes.title}>
                <AudiotrackIcon className={classes.audioIcon} />
                Created Tracks
              </Typography>
              {data.user.trackSet.map(track => (
                <div key={track.id}>
                  <Typography>
                    {track.title} · {track.likes.length} Likes
                  </Typography>
                  <AudioPlayer url={track.url} />
                  <Divider className={classes.divider} />
                </div>
              ))}
            </Paper>

            {/* Liked Tracks */}
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="title" className={classes.title}>
                <ThumbUpIcon className={classes.thumbIcon} />
                Liked Tracks
              </Typography>
              {data.user.likeSet.map(({ track }) => (
                <div key={track.id}>
                  <Typography>
                    {track.title} · {track.likes.length} Likes ·{" "}
                    {track.postedBy.username}
                  </Typography>
                  <AudioPlayer url={track.url} />
                  <Divider className={classes.divider} />
                </div>
              ))}
            </Paper>
          </div>
        );
      }}
    </Query>
  );
};

const PROFILE_QUERY = gql`
  query($id: Int!) {
    user(id: $id) {
      id
      username
      dateJoined
      likeSet {
        id
        track {
          id
          title
          url
          likes {
            id
          }
          postedBy {
            id
            username
          }
        }
      }
      trackSet {
        id
        title
        url
        likes {
          id
        }
      }
    }
  }
`;

const styles = theme => ({
  paper: {
    width: "auto",
    display: "block",
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up("md")]: {
      width: 650,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 2
  },
  audioIcon: {
    color: "purple",
    fontSize: 30,
    marginRight: theme.spacing.unit
  },
  thumbIcon: {
    color: "green",
    marginRight: theme.spacing.unit
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(Profile);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingUsersProfilePage2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingUsersProfilePage3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildingUsersProfilePage4.png)

### 65. Finishing our App 4min
