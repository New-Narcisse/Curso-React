import { Box, ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images = [] }) => {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => (
          <ImageListItem
            className=" animate__animated animate__fadeInUp animate__slow "
            key={image}
          >
            <img
              src={`${image}?w=248&fit=crop&auto=format`}
              srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="Image de la nota"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
