// import {
//     Avatar,
//     Box,
//     Card,
//     Divider,
//     FormControl,
//     IconButton,
//     Input,
//     InputAdornment,
//     Rating,
//     Typography,
// } from "@mui/material";
// import { AddComment as AddCommentIcon } from "@mui/icons-material";
// import { useRef, useState } from "react";
// import { getUploadComment } from "../../../apicalls";
// import { useParams } from "react-router-dom";

// export default function AboutReview({ courseDetail }) {
//     const input = useRef();

//     const [value, setValue] = useState(0);
//     return (
//         <Box>
//             <Card sx={{ boxShadow: 0 }}>
//                 <Box
//                     sx={{
//                         px: "32px",
//                         paddingTop: "32px",
//                         paddingBottom: "48px",
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             fontSize: "32px",
//                             fontWeight: 500,
//                             lineHeight: "38.4px",
//                         }}
//                     >
//                         Comments
//                     </Typography>
//                     <Box>
//                         {courseDetail.commentDetail.slice(-10).map(comment => {
//                             return (
//                                 <Card sx={{ boxShadow: 0 }} key={comment._id}>
//                                     <Box sx={{ display: "flex", margin: 2 }}>
//                                         <Box sx={{ marginLeft: "10px" }}>
//                                             <Typography variant="h4">
//                                                 Name :{" "}
//                                                 {
//                                                     comment.commentUser[0]
//                                                         .username
//                                                 }
//                                             </Typography>
//                                             <Typography variant="h6">
//                                                 Date :{" "}
//                                                 {new Date(
//                                                     comment.created_at
//                                                 ).toLocaleDateString("en-GB")}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                     <Typography variant="body1">
//                                         {comment.text}
//                                     </Typography>
//                                     <Divider sx={{ my: 2 }} />
//                                 </Card>
//                             );
//                         })}
//                     </Box>
//                 </Box>
//             </Card>

//             <FormControl fullWidth sx={{ mt: 2 }}>
//                 <form
//                     onSubmit={e => {
//                         e.preventDefault();
//                         const text = input.current.value;

//                         (async () => {
//                             const user = await getUploadComment(courseDetail._id, text);

                            
//                         })();

//                     }}
//                 >
//                     <Input
//                         inputRef={input}
//                         sx={{ fontSize: "16px", py: 2 }}
//                         placeholder="Your review comment "
//                         multiline
//                         fullWidth
//                         variant="standard"
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton type="submit">
//                                     <AddCommentIcon sx={{ color: "info" }} />
//                                 </IconButton>
//                             </InputAdornment>
//                         }
//                     />
//                 </form>
//             </FormControl>
//         </Box>
//     );
// }
import {
    Avatar,
    Box,
    Card,
    Divider,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    Rating,
    Typography,
  } from "@mui/material";
  import { AddComment as AddCommentIcon } from "@mui/icons-material";
  import { useRef, useState } from "react";
  import { getUploadComment } from "../../../apicalls";
  import { useParams } from "react-router-dom";
  
  export default function AboutReview({ courseDetail }) {
    const input = useRef();
    const [comments, setComments] = useState(courseDetail.commentDetail.slice(-10));
    const [value, setValue] = useState(0);
  
    const addComment = async () => {
      const text = input.current.value;
  
      if (text.trim() === "") {
        return; // don't add empty comments
      }
  
      const user = await getUploadComment(courseDetail._id, text);
  
      // Assuming the new comment structure is similar to existing ones
      const newComment = {
        _id: user._id, // adjust this based on the actual structure of the new comment
        commentUser: [{ username: user.username }], // adjust this based on the actual structure of the new commentUser
        created_at: new Date().toISOString(),
        text: text,
      };
  
      setComments((prevComments) => [newComment, ...prevComments]);
      input.current.value = ""; // clear the input after submitting
    };
  
    return (
      <Box>
        <Card sx={{ boxShadow: 0 }}>
          <Box sx={{ px: "32px", paddingTop: "32px", paddingBottom: "48px" }}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 500,
                lineHeight: "38.4px",
              }}
            >
              Comments
            </Typography>
            <Box>
              {comments.map((comment) => {
                return (
                  <Card sx={{ boxShadow: 0 }} key={comment._id}>
                    <Box sx={{ display: "flex", margin: 2 }}>
                      <Box sx={{ marginLeft: "10px" }}>
                        <Typography variant="h4">
                          Name : {comment.commentUser[0].username}
                        </Typography>
                        <Typography variant="h6">
                          Date : {new Date(comment.created_at).toLocaleDateString("en-GB")}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1">{comment.text}</Typography>
                    <Divider sx={{ my: 2 }} />
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Card>
  
        <FormControl fullWidth sx={{ mt: 2 }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addComment();
            }}
          >
            <Input
              inputRef={input}
              sx={{ fontSize: "16px", py: 2 }}
              placeholder="Your review comment "
              multiline
              fullWidth
              variant="standard"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <AddCommentIcon sx={{ color: "info" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
        </FormControl>
      </Box>
    );
  }
  