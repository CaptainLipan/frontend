import react from 'react';
import './Filter.css';
import {NewReleases} from "@mui/icons-material";
import {Whatshot} from "@mui/icons-material";
export default function Filter() {

    return <div className={"filter"}>
        <div className={"filter-item"}>
            <NewReleases/>
            <span>Latest</span>
        </div>
        <div className={"filter-item"}>
            <Whatshot/>
            <span>Popular</span>
        </div>
    </div>;
}
