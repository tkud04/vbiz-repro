import { StyleSheet } from 'react-native'

import { fontScale } from "../../../theme/fonts"
import metrics from "../../../theme/metrics"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: fontScale(24),
    fontWeight: 'bold',
    lineHeight: 38
  },
  desc: {
    width: metrics.screenWidth/1.4,
    lineHeight: 24,
    marginBottom: 20
  },
})

export default styles
