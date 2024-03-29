import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  

  return (
    <JournalLayout>
      {/* <Typography>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, unde
        eum iusto autem error, atque quod quas voluptatem aperiam reprehenderit
        doloremque nam, laboriosam adipisci modi omnis. Maiores architecto
        expedita delectus.{" "}
      </Typography> */}

      {active !== null ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
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
        className=" animate__animated animate__heartBeat animate__delay-1s animate__slow animate__repeat-3 "
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
