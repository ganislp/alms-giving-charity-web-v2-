import Card from "@material-ui/core/Card";
import withStyles from "@material-ui/core/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


export const FiCard = withStyles({
  root: {
    position: "relative"
  }
})(Card);



export const FiCardContent = withStyles({
  root: {
    position: "relative",
    backgroundColor: "transparent"
  }
})(CardContent);

export const FiCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  }
})(CardMedia);

// --- Exports --- //
export default {
  FiCard,
  FiCardContent,
  FiCardMedia
};