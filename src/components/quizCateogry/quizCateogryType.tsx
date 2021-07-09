
import naruto from "../../utils/images/quizImages/naruto.png";
import onePiece from "../../utils/images/quizImages/onePiece.png";
import OnePunchMan from "../../utils/images/quizImages/OnePunchMan.png";
import deathNote from "../../utils/images/quizImages/deathNote.png";
import dragonBallz from "../../utils/images/quizImages/dragonBallz.png";
import dc from "../../utils/images/quizImages/dc.png";
import marvel from "../../utils/images/quizImages/marvel.png";



export type quizDetails = {
    quizImg: string,
    quizName: string,

}

export type quizCards = quizDetails[];

export const quizCateogry: quizCards = [
    {
        quizImg: naruto,
        quizName: "Naruto"
    },
    {
        quizImg: onePiece,
        quizName: "One Piece"
    },
    {
        quizImg: OnePunchMan,
        quizName: "One Punch Man"
    },
    {
        quizImg: deathNote,
        quizName: "Death Note"
    },
    {
        quizImg: dragonBallz,
        quizName: "DragonBall Z"
    },
    {
        quizImg: dc,
        quizName: "Dc"
    },
    {
        quizImg: marvel,
        quizName: "Marvel"
    },

]

