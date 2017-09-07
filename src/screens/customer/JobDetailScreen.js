import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content, StyleProvider } from 'native-base';
import Swiper from 'react-native-swiper';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';
import SetLawnSize from '../../components/customer/SetLawnSize';
import SetLawnCondition from '../../components/customer/SetLawnCondition';
import RequestCameraPermissions
  from '../../components/customer/RequestCameraPermissions';
import PhotoMyLawn from '../../components/customer/PhotoMyLawn';
import JobConfirmations from '../../components/customer/JobConfirmations';

class JobDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Job Details',
    headerTintColor: '#00aaf9',
    headerBackTitle: 'Back'
  });

  setJobDetails = () => {
    this.props.navigation.navigate('jobdetails');
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >

            <Swiper
              style={styles.wrapper}
              showsButtons
              buttonWrapperStyle={styles.buttonWrap}
              loop={false}
              dotStyle={{ marginLeft: 10, marginRight: 10, marginBottom: 20 }}
              activeDotColor="#3c3c3c"
              activeDotStyle={{
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 20
              }}
              nextButton={
                <Text style={{ color: '#3c3c3c', fontSize: 40 }}>
                  ›
                </Text>
              }
              prevButton={
                <Text style={{ color: '#3c3c3c', fontSize: 40 }}>
                  ‹
                </Text>
              }
              removeClippedSubviews={false}
            >
              <View style={styles.slide1}>
                <SetLawnSize />
              </View>
              <View style={styles.slide2}>
                <SetLawnCondition />
              </View>
              <View style={styles.slide3}>
                <RequestCameraPermissions />
              </View>
              <View style={styles.slide1}>
                <PhotoMyLawn />
              </View>
              <View style={styles.slide2}>
                <JobConfirmations />
              </View>
            </Swiper>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'red',
    // flex: 1
  },
  buttonWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 30
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  onboardTop: {
    flex: 1.7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50
  },
  onboardBottom: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'BetaSansBold',
    textAlign: 'center'
  },
  textLeft: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'BetaSansBold'
  },
  textSubtitle: {
    color: '#dedc00',
    fontSize: 18,
    fontFamily: 'BetaSansBold',
    textAlign: 'center',
    marginTop: 10
  },
  textDescription: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'BetaSansNorm',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  }
});

export default JobDetailScreen;
