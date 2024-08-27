import {
    View, 
    Text, 
    SafeAreaView, 
    ScrollView, 
    ActivityIndicator, 
    RefreshControl} from 'react-native'
import { Stack,  
    useLocalSearchParams, 
    useRouter, 
    useSearch } from 'expo-router';
import { lazy, 
    useCallback, 
    useState } from 'react';
import { Company, 
    JobAbout, 
    JobFooter, 
    JobTab, 
    JobTabs, 
    ScreenHeaderBtn } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';


const JobDetails = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    console.log("params :" , params.id);

    const { data, isLoading, error, refetch } = useFetch(
        'job-details', {job_id: params.id}
      );

      const [refreshing, setRefreshing] = useState(false);
      const onRefresh = () => {}
  

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension= "60%"
                    handlerPress={() => router.push('/')}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn
                    iconUrl={icons.share}
                    dimension="50%"/>
                ),
                headerTitle: ""
            }}
            />

        <Text>Hello Activity!</Text>

        <>
            <ScrollView showsVerticalScrollIndicator={false} 
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            {isLoading ? (
                <ActivityIndicator size={'large'} color={COLORS.primary}/>
            ): error ? (
                <Text>Something Wrong!</Text>
            ): data.length === 0 ? (
                <Text>No Data!</Text>
            ): (
                <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                    <Company
                    companyLogo={data[0].employer_logo}
                    jobTitle={data[0].jobTitle}
                    companyName={data[0].employer_name}
                    location={data[0].job_city}
                    />
                    <JobTabs/>
                </View>
            )}
            </ScrollView>
            </>
        </SafeAreaView>
    )
}
export default JobDetails;