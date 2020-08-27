import React from 'react';
import './Business.css';

class Business extends React.Component {
//HTML for properly displaying businesses
    render(){
        return(
            <div className="Business">
                <div className="image-container">
                    <a href={this.props.business.url} >
                        <img src={this.props.business.imageSrc} alt=''/>
                    </a>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{this.props.business.address}</p>
                        <p>{this.props.business.city}</p>
                        <p>{this.props.business.state} {this.props.business.zipCode}</p>
                     </div>
                    <div className="Business-reviews">
                        <p className = "category">{this.props.business.category.toUpperCase()}</p>
                        <p className="rating">{`${this.props.business.rating} stars`}</p>
                        <p>{`${this.props.business.reviewCount} reviews`}</p>
                    </div>
                </div>
            </div>
        )
    }

}


export default Business;