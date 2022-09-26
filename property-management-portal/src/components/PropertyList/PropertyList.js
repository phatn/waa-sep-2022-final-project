import { useEffect, useState } from "react"
import Grid from '@mui/material/Unstable_Grid2';
// import Grid from '@mui/material/Grid';
import { AxiosService } from "../../services/AxiosService";
import Constants from "Constants";
import PropertyCard from "./PropertyCard";
const DEFAULT_IMG = process.env.PUBLIC_URL + "/slider-1.jpeg";

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

export default function PropertyList(props) {
    let [properties, setProperties] = useState([]);

    const getProperties = async () => {
        console.log("Get properties");
        console.log(Constants);
        let properties = await AxiosService("").get("/properties/search");
        console.log(properties);
        // set default image
        properties.data.map(prop => {
            prop.mainPicture = prop.picture != null && prop.picture.length > 0 ?
                prop.picture[0] : DEFAULT_IMG
            prop.formattedPrice = formatter.format(prop.price)
        });
        setProperties(properties.data);
    }

    useEffect(() => { getProperties() }, []);

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