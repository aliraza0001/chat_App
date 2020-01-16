import React, { Component } from 'react'
import {View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import User from '../components/profile/index'
import SearchBar from '../components/searchbar/index'
import Card from '../components/card/index'

export default class UserScreen extends Component {
  state = {
    data: [],
    arrayholder: [],
    value: '',
    loading: false
  }

  componentDidMount() {
    this.RandomUsers()

  }

  RandomUsers = async () => {
    this.setState({ loading: true })
    const response = await fetch('https://randomuser.me/api/?results=150')
    const newdata = await response.json();
    this.setState({ data: newdata.results, arrayholder: newdata.results, loading: false })

  }


  searchFilterFunction = text => {
    this.setState({ value: text });
    const updateData = this.state.arrayholder.filter(item => {
      const itemData = item.name.first.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: updateData });
  };

  render() {
    if (!this.state.loading) {
      return (
        <SafeAreaView style={{ backgroundColor: "#23152e", flex: 1 }}>
          <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#666666', marginBottom: 10 }}>
            <User />
            <SearchBar value={this.state.value} onChangeText={(val) => this.searchFilterFunction(val)} />
          </View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => <Card name={item.name.first} img={item.picture.large} navigate={this.props.navigation} />}
            keyExtractor={item => item.phone}
          />
        </SafeAreaView>
      )
    }
    else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
}
