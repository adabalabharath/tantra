import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../Corousel.css";

const Corousel = () => {
  const nav = useNavigate();

  const store = () => {
    nav('/store');
  };

  return (
    <Box className="coro" onClick={store}>
      <div className="card">
        <Center>
          <img src="https://cdn.zoutons.com/images/originals/blog/1648892680413.jpg_1648892680.png" alt="slide 1" />
        </Center>
      </div>
      <div className="card">
        <Center>
          <img src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/05/Myntra-End-of-Reason-Sale.jpg" alt="slide 2" />
        </Center>
      </div>
      <div className="card">
        <Center>
          <img src="https://files.prokerala.com/news/photos/imgs/1024/myntra-1384476.jpg" alt="slide 3" />
        </Center>
      </div>
      <div className="card">
        <Center>
          <img src="https://cdn.zoutons.com/images/originals/blog/myntra-1st-order_1672143297.png" alt="slide 4" />
        </Center>
      </div>
      {/* Duplicate the items for continuous effect */}
      <div className="card">
        <Center>
          <img src="https://cdn.zoutons.com/images/originals/blog/1648892680413.jpg_1648892680.png" alt="slide 1" />
        </Center>
      </div>
      <div className="card">
        <Center>
          <img src="https://cdn.flipshope.com/blog/wp-content/uploads/2022/05/Myntra-End-of-Reason-Sale.jpg" alt="slide 2" />
        </Center>
      </div>
      <div className="card">
        <Center>
          <img src="https://files.prokerala.com/news/photos/imgs/1024/myntra-1384476.jpg" alt="slide 3" />
        </Center>
      </div>
      <div className="card">
        <Center>
          <img src="https://cdn.zoutons.com/images/originals/blog/myntra-1st-order_1672143297.png" alt="slide 4" />
        </Center>
      </div>
    </Box>
  );
};

export default Corousel;
