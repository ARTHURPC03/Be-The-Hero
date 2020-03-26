import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background: #0d0d0d;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #191919;
  margin-bottom: 16px;
  margin-top: 48px;
`

export const ButtonTouch = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 24px;
`

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #999;
`
export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #191919;
  margin-bottom: 16px;
`

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  line-height: 30px;
`

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #999;
  margin-top: 16px;
  text-align: justify;
`

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`

export const ActionTouch = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`
