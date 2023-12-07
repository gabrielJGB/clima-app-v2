export const get_direction = (string) => {

    switch (string) {

        case "N":
            return 0;
        case "NNE":
            return 22;
        case "NE":
            return 50;
        case "ENE":
            return 73;
        case "E":
            return 95;
        case "ESE":
            return 118;
        case "SE":
            return 140;
        case "SSE":
            return 163;
        case "S":
            return 185;
        case "SSO":
            return 208;
        case "SO":
            return 230;
        case "OSO":
            return 253;
        case "O":
            return 275;
        case "ONO":
            return 298;
        case "NO":
            return 320;
        case "NNO":
            return 343;
        default:
            return 0

        

    }

}