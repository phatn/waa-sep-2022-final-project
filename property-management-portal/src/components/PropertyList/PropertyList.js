import { Pagination } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import DataPagination from "../DataPagination/DataPagination";
import PropertyCard from "./PropertyCard";

const ITEMS_PER_PAGE = 20;

export default function PropertyList(props) {
    let data = props.properties;
    let [page, setPage] = useState(1);
    const count = Math.ceil(data.length / ITEMS_PER_PAGE);
    const DATA_PAGINATION = DataPagination(data, ITEMS_PER_PAGE);

    useEffect(() => {
        gotoPage(1);
    }, [data]);

    const gotoPage = (page) => {
        setPage(page);
        DATA_PAGINATION.goTo(page);
    }

    const pageChanged = (e, page) => {
        gotoPage(page);
    }

    return (
        <div className="container">
            <h3>Property List</h3>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {DATA_PAGINATION.currentData().map(prop =>
                    <Grid key={prop.id} xs={12} md={6} lg={4} xl={3}>
                        <PropertyCard {...prop} />
                    </Grid>
                )}
            </Grid>
            <div className="pagination">
                <Pagination
                    count={count}
                    size="large"
                    color="primary"
                    page={page}
                    onChange={pageChanged}
                />
            </div>
        </div>
    )
}