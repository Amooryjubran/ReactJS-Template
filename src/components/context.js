import React, { Component } from 'react';
import {placeInfo, review, detailInfo, news, reviews } from '../data';
const InfoContext = React.createContext();

const InfoCosumer = InfoContext.Consumer;
// Provider
// Consumer

class InfoProvider extends Component {
    state = {
        info: placeInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        news: news
    }
    getItem = id => {
        const item = this.state.info.find(item => item.id === id);
        return item;
      };
    
      handleDetail = id => {
        const item = this.getItem(id);
        this.setState(() => {
          return {
            detailInfo: item
          };
        });
      };


    render() {
        return (
            <InfoContext.Provider value={{
                info: this.state.info,
                reviews: this.state.reviews,
                maps: this.state.maps,
                headerTitle: this.state.headerTitle,
                headerSubTitle: this.state.headerSubTitle,
                headerText: this.state.headerText,
                detailInfo: this.state.detailInfo,
                news: this.state.news,
                name: this.state.name,
                avatar: this.state.avatar,
                comment: this.state.comment,
                handleDetail: this.handleDetail
            }}>
                {this.props.children}
            </InfoContext.Provider>
        )
    }
}

export {InfoProvider, InfoCosumer};