import React from 'react';
import IncreasedButton from './IncreasedButton'; 
import DecreasedButton from './DecreasedButton';
import './App.css';
import bounce from './bounce.png';
import milkymistcurd from './milkymistcurd.png';
import milkymistpaneer from './milkymistpaneer.png';
import diarymilk from './diarymilk.png';
import milmamilk from './milmamilk.png';
import butter from './butter.png';
import bounty from './bounty.png';
import darkfantasy from './darkfantasy.png';
import milmacurd from './milmacurd.png';
import amulghee from './amulghee.png';
import amulicecream from './amulicecream.png';
import AddToCart from './AddToCart';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.renderImage = this.renderImage.bind(this);
        this.savePriceAndQty = this.savePriceAndQty.bind(this);
    }

    renderImage() {
        switch(this.props.product.imgurl) {
            case 'diarymilk' :
                return diarymilk;
            case 'milkymistcurd' :
                return milkymistcurd;
            case 'bounce' :
                return bounce;
            case 'milkymistpaneer' :
                return milkymistpaneer;
            case 'milmamilk' :
                return milmamilk;
            case 'milmacurd' :
                return milmacurd;
            case 'bounty' :
                return bounty;
            case 'butter' :
                return butter;
            case 'darkfantasy' :
                return darkfantasy;
            case 'amulghee' :
                return amulghee;
            case 'amulicecream' :
                return amulicecream;
            default : return null;
        }
    }

    savePriceAndQty(qty,price) {
        this.props.saveDetails(qty,price);
    }
    render() {
        return (
            <div className= "productList">
            <div className= "shiftLeft">
            <img align="center" src={this.renderImage()} alt={this.props.product.imgurl} width="90" height="80" />
            <br/>
            {this.props.product.offerText}
            </div>
            <div className= "shiftRight">
            {this.props.product.Productname}
            <br/>
            {this.props.product.Brandname}
            <br/>
            {this.props.product.Quantity}
            <br/>
            MRP  {this.props.product.MRP}
            <br/>
            Rs   {this.props.product.Price}
            </div>
            <IncreasedButton productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} IncreasedButtonCallBack = {this.savePriceAndQty}/>
            <DecreasedButton productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} DecreasedButtonCallBack = {this.savePriceAndQty} />
            <AddToCart productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} AddCartCallBack = {this.savePriceAndQty}/>
            </div>
        )
    }
}

export default Product;
