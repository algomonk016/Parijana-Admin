import React, {
    useState,
    useCallback,
    useEffect
} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native'
// import { pick } from 'react-native-document-picker'
// import { add } from 'react-native-reanimated'
import {
    CustomButton,
    CustomDropdown,
    Input,
    PickDocument
} from '../components'
import {
    COLORS,
    FONTS,
    SIZES,
    actions
} from '../constants'
import {
    dummyData
} from '../constants'

const AddDocument = ({ navigation }) => {
    const [collegeOpen, setCollegeOpen] = useState(false);
    const [collegeValue, setCollegeValue] = useState(null)
    const [collegeItems, setCollegeItems] = useState(dummyData.collegeDropdown)

    const [departmentOpen, setDepartmentOpen] = useState(false);
    const [departmentValue, setDepartmentValue] = useState(null)
    const [departmentItems, setDepartmentItems] = useState(dummyData.departmentDropdown)

    const [subjectOpen, setSubjectOpen] = useState(false);
    const [subjectValue, setSubjectValue] = useState(null)
    const [subjectItems, setSubjectItems] = useState(dummyData.subjectDropdown)

    const [teacherOpen, setTeacherOpen] = useState(false);
    const [teacherValue, setTeacherValue] = useState(null)
    const [teacherItems, setTeacherItems] = useState(dummyData.teacherDropdown)

    const [documentForOpen, setDocumentForOpen] = useState(false);
    const [documentForValue, setDocumentForValue] = useState(null)
    const [documentForItems, setDocumentForItems] = useState(dummyData.documentFor)

    const [title, setTitle] = useState(null)
    const [sem, setSem] = useState(null)
    const [year, setYear] = useState(null)

    const [hasPicked, setHasPicked] = useState(false)
    const [pickedFile, setPickedFile] = useState(null)

    const addedFiles = []
    const uploadedDocumentLinks = []

    // default selections
    useEffect(() => {

    }, [])

    const onSubjectOpen = useCallback(() => {
        setCollegeOpen(false)
        setDepartmentOpen(false)
        setTeacherOpen(false)
        setDocumentForOpen(false)
    })

    const onCollegeOpen = useCallback(() => {
        setSubjectOpen(false)
        setDepartmentOpen(false)
        setTeacherOpen(false)
        setDocumentForOpen(false)
    })

    const onDepartmentOpen = useCallback(() => {
        setCollegeOpen(false)
        setSubjectOpen(false)
        setTeacherOpen(false)
        setDocumentForOpen(false)
    })

    const onTeacherOpen = useCallback(() => {
        setCollegeOpen(false)
        setDepartmentOpen(false)
        setSubjectOpen(false)
        setDocumentForOpen(false)
    })

    const onDocumentForOpen = useCallback(()=>{
        setCollegeOpen(false)
        setDepartmentOpen(false)
        setSubjectOpen(false)
        setTeacherOpen(false)
    })

    const doAction = async(action, arg1) => {
        switch (action) {
            case actions.ADD_MORE_FILE:
                // let data = new FormData()
                let data = {
                    'college': collegeValue,
                    'department': departmentValue,
                    'documentFor': documentForValue,
                    'semester': sem,
                    'subject': subjectValue,
                    'teacher': teacherValue,
                    'title': title,
                    'year': year,
                }

                setTitle('')

                const doc = pickedFile
                doAction(actions.UPLOAD_DOC_TO_DRIVE, doc)

                setHasPicked(false)
                setPickedFile(null)
                addedFiles.push(data)
                console.log('added', addedFiles)
                
                break

            case actions.UPLOAD_DOC_TO_DRIVE:
                // TODO: upload file (arg1), push the link in the array

                break

            case actions.UPLOAD_FILE:
                let formData = new FormData()

                formData = addedFiles

                // TODO: files ki link me iterate karo, aur link add krdo

                // TODO: fir post request

                break
            // case actions.CLOSE_OTHER_DROPDOWNS:
            //     if(currentlyOpen !== null){
            //         `set${current}Open`(false);
            //         setCurrentlyOpen(current);
            //     } else{
            //         setCurrentlyOpen(current);
            //     }
            //     break;
        }
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container} nestedScrollEnabled >
                <View style={styles.header}>
                    <Text style={styles.heading}>Upload file</Text>

                    <TouchableOpacity>
                        <Text style={styles.link}>Scan Files</Text>
                    </TouchableOpacity>
                </View>

                {/* document upload */}
                <PickDocument 
                    hasPicked={hasPicked}
                    setHasPicked={setHasPicked}
                    pickedFile={pickedFile}
                    setPickedFile={setPickedFile}
                />

                {/* title, year and semester */}
                <View style={styles.inputFieldContainer}>
                    <Input
                        label={'Document Title'}
                        customStyle={{ flex: 3 }}
                        placeholder={'Document Title'}
                        defaultValue={title}
                        onChangeText={text => setTitle(text.trim())}
                    />
                </View>
                <View style={styles.inputFieldContainer}>
                    <Input
                        label={'Semester'}
                        keyboardType='numeric'
                        customStyle={{ flex: 1 }}
                        placeholder={'3'}
                        onChangeText={text => setSem(text)}
                    />
                    <View style={{ flex: 0.1 }} />
                    <Input
                        label={'Year of Exam'}
                        keyboardType='numeric'
                        customStyle={{ flex: 1 }}
                        placeholder={'3'}
                        onChangeText={text => setYear(text)}
                    />
                </View>

                <View style={styles.dropdownContainer}>
                    {/* college */}
                    <CustomDropdown
                        label={'College'}
                        open={collegeOpen}
                        value={collegeValue}
                        items={collegeItems}
                        setOpen={setCollegeOpen}
                        setValue={setCollegeValue}
                        // onChangeValue
                        searchable
                        addCustomItem
                        zIndex={5000}
                        zIndexInverse={1000}
                        onOpen={onCollegeOpen}
                    // onOpen={() => doAction(actions.CLOSE_DROPDOWNS, 'College')}
                    />

                    {/* department */}
                    <CustomDropdown
                        label={'Department'}
                        open={departmentOpen}
                        value={departmentValue}
                        items={departmentItems}
                        setOpen={setDepartmentOpen}
                        setValue={setDepartmentValue}
                        // onChangeValue
                        searchable
                        addCustomItem
                        zIndex={4000}
                        onOpen={onDepartmentOpen}
                        zIndexInverse={2000}
                    />

                    {/* subject */}
                    <CustomDropdown
                        label={'Subject'}
                        open={subjectOpen}
                        value={subjectValue}
                        items={subjectItems}
                        setOpen={setSubjectOpen}
                        setValue={setSubjectValue}
                        // onChangeValue
                        searchable
                        addCustomItem
                        zIndex={3000}
                        onOpen={onSubjectOpen}
                        zIndexInverse={3000}
                    />

                    {/* document for */}
                    <CustomDropdown
                        label={'Document For'}
                        open={documentForOpen}
                        value={documentForValue}
                        items={documentForItems}
                        setOpen={setDocumentForOpen}
                        setValue={setDocumentForValue}
                        // onChangeValue
                        searchable
                        addCustomItem
                        zIndex={2000}
                        onOpen={onDocumentForOpen}
                        zIndexInverse={4000}
                    />

                    {/* teacher */}
                    <CustomDropdown
                        label={'Teacher'}
                        open={teacherOpen}
                        value={teacherValue}
                        items={teacherItems}
                        setOpen={setTeacherOpen}
                        setValue={setTeacherValue}
                        // onChangeValue
                        searchable
                        addCustomItem
                        zIndex={1000}
                        zIndexInverse={5000}
                        onOpen={onTeacherOpen}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton
                        buttonText={'+ Add more'}
                        onPress={() => doAction(actions.ADD_MORE_FILE)}
                        buttonContainerStyle={{
                            paddingVertical: 10,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.white,
                            // width: "80%",
                            alignSelf: "center",
                            // marginTop: SIZES.radius,
                            borderColor: COLORS.turquoise,
                            borderWidth: 1,
                            paddingHorizontal: 15,
                        }}
                    />
                    <CustomButton
                        buttonText={'Upload Document'}
                        colors={[COLORS.green, COLORS.orange]}
                        onPress={() => doAction(actions.UPLOAD_FILE)}
                        buttonContainerStyle={{
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.green,
                            // width: "80%",
                            alignSelf: "center",
                            // marginVertical: SIZES.base
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dropdownContainer: {
        zIndex: 10,
        marginVertical: 5,
    },
    container: {
        // backgroundColor: COLORS.white,
        // width: "",
        paddingHorizontal: SIZES.body2,
        // flex: 1,
    },
    inputFieldContainer: {
        flexDirection: 'row'
    },
    heading: {
        ...FONTS.h2
    },
    header: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    link: {
        fontSize: SIZES.body4,
        color: COLORS.orange,
    },
    buttonContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-evenly',
        paddingBottom: SIZES.padding
    }
})

export default AddDocument