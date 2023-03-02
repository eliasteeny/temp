import {useState, useEffect, useContext} from "react"

import { VisibilityContext } from "react-horizontal-scrolling-menu";

import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function LeftArrow() {
    const {
      getPrevItem,
      isFirstItemVisible,
      scrollToItem,
      visibleItemsWithoutSeparators,
      initComplete
    } = useContext(VisibilityContext);
  
    const [disabled, setDisabled] = useState(
      !initComplete || (initComplete && isFirstItemVisible)
    );


    useEffect(() => {
      if (visibleItemsWithoutSeparators.length) {
        setDisabled(isFirstItemVisible);
      }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);
  
    const clickHandler = () => {
      const prevItem = getPrevItem();
      scrollToItem(prevItem?.entry?.target, "smooth", "start");
    };
  
    return (
      <IconButton disabled={disabled} onClick={clickHandler}>
        <ArrowBackIosIcon/>
      </IconButton>
    );
  }
  
  export function RightArrow() {
    const {
      getNextItem,
      isLastItemVisible,
      scrollToItem,
      visibleItemsWithoutSeparators
    } = useContext(VisibilityContext);
  
    const [disabled, setDisabled] = useState(
      !visibleItemsWithoutSeparators.length && isLastItemVisible
    );

    
    useEffect(() => {
      if (visibleItemsWithoutSeparators.length) {
        setDisabled(isLastItemVisible);
      }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);
  
    // NOTE: for scroll 1 item
    const clickHandler = () => {
      const nextItem = getNextItem();
      scrollToItem(nextItem?.entry?.target, "smooth", "end");
    };
  
    return (
      <IconButton disabled={disabled} onClick={clickHandler}>
        <ArrowForwardIosIcon/>
      </IconButton>
    );
  }