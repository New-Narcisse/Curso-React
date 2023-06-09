import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
}


  return (
    <JournalLayout>
      {/* <Typography>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, unde
        eum iusto autem error, atque quod quas voluptatem aperiam reprehenderit
        doloremque nam, laboriosam adipisci modi omnis. Maiores architecto
        expedita delectus.{" "}
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
