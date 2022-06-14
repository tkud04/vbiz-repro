import React, { useEffect } from "react"
import { Image, View } from "react-native"

import { Root, Text, TouchItem } from "../../../components"
import generateHeader from "../../../utils/generateHeader"
import logoV from '../../../assets/images/logo-v.png'
import PlaceholderIcon from '../../../assets/icons/placeholder-icon.svg'
import styles from "./styles"

export const SignUpChoice = ({ navigation }) => {
  useEffect(() => {
    generateHeader('', navigation)
  }, [])

  return (
    <Root style={styles.container} showLogin>
      <View>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.desc}>How do you want to register your Vbiz account?</Text>
      </View>
      <View>
        <TouchItem onPress={() => navigation.navigate('SignUpCorperate')} style={styles.optionWrapper}>
          <View style={[styles.logoWrapper, { marginBottom: 10 }]}>
            <Image source={logoV} style={styles.logo} resizeMode="contain"/>
          </View>
          <View>
            <Text style={styles.optionTitle}>I have a corporate Vbank account</Text>
            <Text style={{ lineHeight: 22 }}>Register with my Vbank account</Text>
          </View>
        </TouchItem>
        <TouchItem onPress={() => {}} style={styles.optionWrapper}>
          <View style={[styles.logoWrapper, { marginTop: 15, marginRight: 10 }]}>
            <PlaceholderIcon />
          </View>
          <View>
            <Text style={styles.optionTitle}>I don’t have a Vbank account</Text>
            <Text style={{ lineHeight: 22 }}>Register with my business details</Text>
          </View>
        </TouchItem>
      </View>
    </Root>
  )
}
