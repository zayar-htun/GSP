// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import {
//     Box,
//     Button,
//     FormControl,
//     FormControlLabel,
//     FormLabel,
//     Radio,
//     RadioGroup,
//     Rating,
// } from "@mui/material";

// export default function Collapse() {
//     return (
//         <div>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                 >
//                     <Typography>Category</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <RadioGroup
//                         aria-labelledby="demo-radio-buttons-group-label"
//                         name="radio-buttons-group"
//                         defaultValue={null}
//                     >
//                         <FormControlLabel
//                             value="female"
//                             control={<Radio />}
//                             label="Programming"
//                         />
//                         <FormControlLabel
//                             value="male"
//                             control={<Radio />}
//                             label="Graphic Design"
//                         />
//                         <FormControlLabel
//                             value="other"
//                             control={<Radio />}
//                             label="Engineering"
//                         />
//                         <FormControlLabel
//                             value="other"
//                             control={<Radio />}
//                             label="Accounting"
//                         />
//                         <FormControlLabel
//                             value="other"
//                             control={<Radio />}
//                             label="Robotics"
//                         />
//                     </RadioGroup>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel2a-content"
//                     id="panel2a-header"
//                 >
//                     <Typography>Ratings</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <FormControl>
//                         <RadioGroup
//                             aria-labelledby="demo-radio-buttons-group-label"
//                             name="radio-buttons-group"
//                             defaultValue={null}
//                         >
//                             <FormControlLabel
//                                 value="female"
//                                 control={<Radio />}
//                                 label={
//                                     <div>
//                                         <Rating
//                                             name="read-only"
//                                             value={5}
//                                             readOnly
//                                         />
//                                     </div>
//                                 }
//                             />
//                             <FormControlLabel
//                                 value="male"
//                                 control={<Radio />}
//                                 label={
//                                     <div>
//                                         <Rating
//                                             name="read-only"
//                                             value={4}
//                                             readOnly
//                                         />
//                                     </div>
//                                 }
//                             />
//                             <FormControlLabel
//                                 value="other"
//                                 control={<Radio />}
//                                 label={
//                                     <div>
//                                         <Rating
//                                             name="read-only"
//                                             value={3}
//                                             readOnly
//                                         />
//                                     </div>
//                                 }
//                             />
//                             <FormControlLabel
//                                 value="other"
//                                 control={<Radio />}
//                                 label={
//                                     <div>
//                                         <Rating
//                                             name="read-only"
//                                             value={2}
//                                             readOnly
//                                         />
//                                     </div>
//                                 }
//                             />
//                             <FormControlLabel
//                                 value="other"
//                                 control={<Radio />}
//                                 label={
//                                     <div>
//                                         <Rating
//                                             name="read-only"
//                                             value={1}
//                                             readOnly
//                                         />
//                                     </div>
//                                 }
//                             />
//                         </RadioGroup>
//                     </FormControl>
//                 </AccordionDetails>
//             </Accordion>
//         </div>
//     );
// }
import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
export default function Coll() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Button onClick={handleToggle} variant="text" color="primary">
                Category &gt;
            </Button>
            <Collapse in={open}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    defaultValue={null}
                >
                    <FormControlLabel
                        value="All"
                        control={<Radio />}
                        label="All"
                    />
                    <FormControlLabel
                        value="Programming"
                        control={<Radio />}
                        label="Programming"
                    />
                    <FormControlLabel
                        value="Graphic Design"
                        control={<Radio />}
                        label="Graphic Design"
                    />
                    <FormControlLabel
                        value="Engineering"
                        control={<Radio />}
                        label="Engineering"
                    />
                    <FormControlLabel
                        value="Accounting"
                        control={<Radio />}
                        label="Accounting"
                    />
                    <FormControlLabel
                        value="Robotics"
                        control={<Radio />}
                        label="Robotics"
                    />
                </RadioGroup>
            </Collapse>
        </div>
    );
}
