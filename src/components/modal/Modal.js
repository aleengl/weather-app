import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { ModalContainer, Backdrop } from "../styles/Modal.styled";
import { motion, AnimatePresence } from "framer-motion";
import useHttp from "../hooks/use-http";
import { API_URL_CITIES, API_KEY_CITIES } from "../../constants";
import { AsyncPaginate } from "react-select-async-paginate";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

const modalVariants = {
  initial: {
    top: "-20%",
    opacity: 0,
  },
  animate: {
    top: "20%",
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
  exit: {
    top: "-20%",
    transition: {
      duration: 3,
    },
  },
};

const Modal = (props) => {
  const [search, setSearch] = useState(null);
  const { sendRequest } = useHttp();

  const history = useHistory();

  const hideBackdropHandler = () => {
    history.goBack();
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    props.getData({ lat: searchData.lat, lon: searchData.lon });
    history.goBack();
  };

  const loadOptions = (inputValue) => {
    if (inputValue) {
      return sendRequest(
        `${API_URL_CITIES}cities?&namePrefix=${inputValue}`,
        "city",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": `${API_KEY_CITIES}`,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );
    }

    return {
      options: [],
    };
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <AnimatePresence>
          <Backdrop
            onClick={hideBackdropHandler}
            as={motion.div}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <AnimatePresence>
          <ModalContainer
            as={motion.div}
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AsyncPaginate
              placeholder="Select a city..."
              debounceTimeout={1000}
              value={search}
              onChange={handleOnChange}
              loadOptions={loadOptions}
            />
          </ModalContainer>
        </AnimatePresence>,
        document.getElementById("modal-content")
      )}
    </Fragment>
  );
};

export default Modal;
