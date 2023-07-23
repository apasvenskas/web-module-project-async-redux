import React from "react";
import { connect } from "react-redux";

function BitcoinInfo(props){
    const{data, loading, error} = props.bitcoin;

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>
    }
    if (data){
        return(
            <table>
                <thead>
                    <tr>
                        <tr>Currency</tr>
                        <tr>Price</tr>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{data[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    return <p>Data Unavailable</p>;
}

const mapStateToProps = (state) => ({
    bitcoin: state.bitcoin,
});

export default connect(mapStateToProps)(BitcoinInfo);