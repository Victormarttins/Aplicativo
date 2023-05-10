import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>

    </View><ScrollView>
        <Text></Text>
        <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://github.com/Victormarttins.png'
          }} />

        <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://cdn.autopapo.com.br/box/uploads/2022/08/22135052/nissan-skyline-gtr-r34-paul-walker-leilao.png'
          }} />
          <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://www.ps4wallpapers.com/wp-content/uploads/2021/11/2021-11-04_61833d52b8292_LB-R35-4K.jpg'
          }} />
          <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://besthqwallpapers.com/Uploads/15-10-2021/178189/thumb2-2021-porsche-911-turbo-s-4k-911-turbo-s-992-front-view.jpg'
          }} />
          <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://images.pexels.com/photos/8556278/pexels-photo-8556278.jpeg?cs=srgb&dl=pexels-francois-van-vuuren-8556278.jpg&fm=jpg'
          }} />
        <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://w0.peakpx.com/wallpaper/199/448/HD-wallpaper-dodge-challenger-srt-hellcat-widebody-front-look-dodge-challenger-srt-hellcat-widebody-dodge-challenger-2019-cars-behance.jpg'
          }} />
           <Image
          style={{
            width: 400,
            height: 300,
          }}
          source={{
            uri: 'https://images8.alphacoders.com/106/1065267.jpg'
          }} />




      </ScrollView></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
