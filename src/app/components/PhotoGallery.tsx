import { Box, Flex } from "@chakra-ui/react";

export const PhotoGallerySection = () => {
  return (
    <Flex
      direction={"column"}
      p={10}
      textAlign={"justify"}
      color={"brand.1000"}
      border={"4px double #9175BD"}
      borderRadius={12}
      fontFamily={"--font-allura"}
    >
      <Box textAlign={"center"} fontSize={40} marginBottom={10}>
        Photo Gallery
      </Box>
      <Flex justify={"space-evenly"}>
        <img
          width={400}
          src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?cs=srgb&dl=pexels-trungnguyenphotog-2959192.jpg&fm=jpg"
          alt="image1"
        />
        <img
          width={400}
          src="https://erinvale.co.za/wp-content/uploads/Erinvale-Weddings-Couple-03-512-3x2-1.jpg"
          alt="image2"
        />
        <img
          width={400}
          src="https://images.unsplash.com/photo-1519741497674-611481863552?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
          alt="image3"
        />
      </Flex>
      <Flex justify={"space-evenly"} marginTop={20}>
        <img
          width={400}
          src="https://thecontextofthings.com/wp-content/uploads/2014/12/2225.jpeg"
          alt="image4"
        />
        <img
          width={400}
          src="https://www.shutterstock.com/image-photo/generic-wedding-detail-photo-flower-260nw-1229962183.jpg"
          alt="image5"
        />
        <img
          width={400}
          src="https://media.gettyimages.com/id/929904308/photo/bouquet-at-the-beach.jpg?s=612x612&w=gi&k=20&c=x4PlchOXzMCQ64l8D0aqJX5y9gLbGH20AttaUR9EG7A="
          alt="image6"
        />
      </Flex>
    </Flex>
  );
};
