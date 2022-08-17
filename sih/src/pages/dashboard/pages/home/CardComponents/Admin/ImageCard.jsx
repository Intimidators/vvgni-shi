import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "antd";
import config from "../../../../../../ApiConfig/Config";
import "./Imagecard.css";
import axios from "axios";

const ImageCard = ({ post }) => {
  var userRoleFromSession = JSON.parse(sessionStorage.getItem("user"));
  const userId = userRoleFromSession.userId;
  const handleDeletePost = async () => {
    try {
      const res = await axios.post(
        config.server.path + config.role.admin + config.api.deletePost+`?userId=${userId}`,
        {
          mediaId: post.mediaId,
        }
      );
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="post__card">
      <div className="post__card__container">
        <div className="post__card__image">
          <CardMedia
            component="img"
            height="115"
            image={post.mediaURL}
            alt="org image"
            className="img"
          />
        </div>
        <div className="post__card__post_info">
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <Typography gutterBottom variant="p" component="div">
              Media Id : {post.mediaId}
              <br />
              When : {post.date} <br />
              Likes : {post.totalLikeCount} <br />
              Comment : {post.totalCommentCount} <br />
            </Typography>
            <div className="post__card__delete__button">
              <Button onClick={handleDeletePost}>Delete Post</Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
