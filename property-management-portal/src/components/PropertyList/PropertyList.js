import Grid from "@mui/material/Unstable_Grid2";
// import Grid from '@mui/material/Grid';
import PropertyCard from "./PropertyCard";

export default function PropertyList(props) {
    let {properties} = props;

    return (
        <div className="container">
            <h3>Property List</h3>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {properties.map(prop =>
                    <Grid key={prop.id} xs={12} md={6} lg={4} xl={3}>
                        <PropertyCard {...prop} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}