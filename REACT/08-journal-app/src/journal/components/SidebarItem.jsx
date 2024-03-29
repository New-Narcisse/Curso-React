import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { setActiveNote } from "../../store/journal";
import moment from "moment";

export const SidebarItem = ({ title = "", body, id, imageUrls = [], date }) => {
  //   const { isSaving, active } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, id, body, date, imageUrls }));
  };

  const newDate = useMemo(() => {
    const nDate = moment(date).calendar();

    return nDate;
  }, [date]);

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  // const newBody = useMemo(() => {
  //   return body.length > 17 ? body.substring(0, 17) + "..." : body;
  // }, [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newDate} />
          <ListItemText primary={newTitle} />
          {/* <ListItemText secondary={newBody} /> */}
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
