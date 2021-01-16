import { config } from "../../config/appConfig";
import { calcWidth, calcHeight } from "../../config/metrics";

const styles = {

    container: {
        flexDirection: 'row',
        height: calcHeight(83),
        elevation: 10,
        borderColor: config.colors.rgbaBlack(.08),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: config.colors.BLACK
    },
    buttonItem: {
        width: calcWidth() / 5, height: "100%",
        justifyContent: "flex-start", alignItems: "center",
        marginTop: calcHeight(25),

        elevation: 10,
        overflow: "hidden"
    }
}

export default styles