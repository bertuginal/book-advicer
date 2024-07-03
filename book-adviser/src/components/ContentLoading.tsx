import React from "react";
import {PacmanLoader} from "react-spinners";

interface ContentLoadingProps {
    bookLoading: boolean;
}

const ContentLoading: React.FC<ContentLoadingProps> = ({bookLoading}) => {
    return (
        <PacmanLoader
            color={"#0B60B0"}
            size={60}
            loading={bookLoading}
            margin={2}
            speedMultiplier={1}
        />
    )
}

export default ContentLoading