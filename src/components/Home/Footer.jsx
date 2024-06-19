import { Box, Center, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor="aliceblue" padding='30px'>
        <Center>
        <Box width='80%' >
    
        <h1 style={{ fontWeight: "bold" }} >
          MEN’S SHOPPING AT Tantra: A SUPERIOR EXPERIENCE
        </h1>
 
        <blockquote >
          Tantra is one of the best sites when it comes to online shopping for
          men. The finest of material, superior design and unbeatable style go
          into the making of our men’s shopping collection. Our range of online
          shopping men’s wear, accessories, footwear and personal care products
          are second to none. Compared with other men’s shopping sites, Tantra
          brings you the best price products which won’t hurt your pocket. With
          seasonal discounts on trendy casual wear, suits, blazers, sneakers and
          more, online shopping for men at Tantra just gets even more
          irresistible!
        </blockquote>

        <h1 style={{ fontWeight: "bold" }}>
          MEN’S SHOPPING MADE EASY AT Tantra
        </h1>
        <blockquote>
          Tantra is the most convenient men’s online store, what with our
          simplified shopping and payment procedures. With just a few clicks of
          the mouse or taps on your smartphone, you can buy your favorites from
          the best men’s brands right away.
        </blockquote>

        <h1 style={{ fontWeight: "bold" }}>
          ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED
        </h1>
        <blockquote>
          At Tantra, our online shopping fashion for men collection features
          plenty of options to create multiple outfits. At our men’s online shop
          we have brought together an exhaustive range of products from the best
          men’s brands. Here is a list of must-haves from the wide variety of
          awesome products at Tantra:
        </blockquote>
        <Box p={4} className="shopping-guide">
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
        ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED
      </Text>
      <Text mb={4}>
        At Tantra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of awesome products at Tantra:
      </Text>

      <List spacing={4}>
        <ListItem>
          <Text>
            Opt for a charming yet laid-back look with cool T-shirts and casual shirts worn with stylish jeans, casual trousers or shorts. Stay sharp and sophisticated with our smart options in formal shirts and trousers. Look dapper when meeting your clients in our smooth suits. Put on trendy blazers for formal occasions. On your online men’s clothes’ shopping journey, make sure you include kurtas, jackets and sherwanis from our festive wear collection. Stay warm and comfortable in sweaters and sweatshirts. Get fit and ready for adventure, with our sports and active wear collection.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Once you are done with your online men’s clothes’ shopping, make sure you pick up the right accessories to complement your look. Whether you are travelling to work or outside the city our wide variety of bags, backpacks and luggage collection will ensure you are well-packed. Our beautiful watches and smart watches work well to enhance your overall style quotient. Reach out for our sunglasses during the summers – let your eyes stay protected while you opt for maximum swag.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Bring impeccable style to your shoe closet with our incredible collection of footwear for men. Look classy during formal and semi-formal occasions with derbies, loafers and oxfords. Stay hip and happening in parties with boat shoes, monks and brogues from our casual men’s footwear range. Lead an active lifestyle with sneakers and running shoes from our sports footwear selection. Pick up sandals, floaters and flip-flops for a trip to the beach. We also host socks in our men’s online shopping collection. That’s basically everything under one roof!
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Make sure you check out fun printed men’s T-shirts featuring your favourite characters from DC Comics and Marvel studios. Relive the magic of your favourite superhero from Justice League. Fly high with Superman, battle the bad guys with Batman, or get trendy in lightning-speed with a Flash T-shirt. Grab our cool Marvel Avengers T-shirts. Stay powered up with the Iron Man, or walk with the warriors in a Thor T-shirt.
          </Text>
        </ListItem>
        <ListItem>
          <Text>
            Our online shopping fashion for mens collection includes even more amazing merchandise such as innerwear, sleepwear, track pants, personal care, wallets, belts and other fashion accessories.
          </Text>
        </ListItem>
      </List>
    </Box>
</Box>
</Center>
    </Box>
  );
};

export default Footer;
