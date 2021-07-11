
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
    quizId: string,
}

export type quizCards = quizDetails[];

export const quizCateogry: quizCards = [
    {
        quizImg: naruto,
        quizName: "Naruto", quizId: "60eb1096fc71dc02125a896e"
    },
    {
        quizImg: onePiece,
        quizName: "One Piece", quizId: "60eb1096fc71dc02125a89ec"
    },
    {
        quizImg: OnePunchMan,
        quizName: "One Punch Man", quizId: "60eb1096fc71dc02125a89c8"
    },
    {
        quizImg: deathNote,
        quizName: "Death Note", quizId: "60eb1096fc71dc02125a899f"
    },
    {
        quizImg: dragonBallz,
        quizName: "DragonBall Z", quizId: "60eb1097fc71dc02125a8a15"
    },
    {
        quizImg: dc,
        quizName: "Dc", quizId: "60eb1097fc71dc02125a8a34"
    },
    {
        quizImg: marvel,
        quizName: "Marvel", quizId: "60eb1097fc71dc02125a8a53"
    },

]

