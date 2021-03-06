import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native'

import { 
	SIZES, 
	dummyData, 
	COLORS,
	FONTS
} from "../../constants";

const RecentUploads = () => {
	return (
		<View style = {{
			width: '100%',
			marginTop: 10,
		}}>
			{
				dummyData.recentUploads.map((doc, ind) => {
					return (
						<TouchableOpacity key={ind} style={{
							marginVertical: 4
						}}>
							<View style={styles.container}>
								<Text style={styles.details}> {ind + 1}. </Text>
								<View>
									<View style={styles.detailsContainer}>
										<Text style={[styles.details, styles.title]} > {doc.title} </Text>
										<Text style={[styles.details, styles.title]} > {doc.uploadedByName} </Text>
									</View>
									<View style={styles.detailsContainer}>
										<Text style={styles.details}> {doc.course} </Text>
										<Text style={styles.details}> {doc.college} </Text>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					)
				})
			}
		</View>
	)
}

const styles = StyleSheet.create({
	details: {
		fontSize: 13,
		textTransform: 'uppercase',
		marginVertical: 3,
	},
	title: {
		fontSize: SIZES.h3,
		textTransform: 'capitalize'
	},  
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		padding: 5,
		borderRadius: SIZES.base,
		backgroundColor: COLORS.lightTurquoise,
	},
	detailsContainer: {
		flexDirection: 'row'
	}
})

export default RecentUploads
