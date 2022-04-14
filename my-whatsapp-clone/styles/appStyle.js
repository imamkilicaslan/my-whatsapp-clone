import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    padding: 0,
  },
  contTop: {
    flex: 0.2,
    justifyContent: "",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 5,
    alignSelf: "",

    backgroundColor: "#128c7e",
    color: "white",
    fontFamily: "arial",
    fontSize: 20,
  },
  contTopLeft: {
    flex: 0.95,

    paddingLeft: 10,
    opacity: 0.9,
    justifyContent: "space-evenly",
  },
  contTopRight: {
    opacity: 0.9,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  contMiddle: {
    flex: 0.085,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    backgroundColor: "#128c7e",
  },
  contMiddleLeft: {},
  contMiddleRight: {
    flex: 0.88,
    opacity: 0.9,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  sohbetler: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "arial",
  },
  durum: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "arial",
    opacity: 0.7,
  },
  aramalar: {
    color: "white",
    fontFamily: "arial",
    fontSize: 13,
    fontWeight: "bold",
    opacity: 0.7,
  },
  contBottom: {
    flex: 1,
    backgroundColor: "",
  },
  contBottomData1: {
    flexDirection: "row",
    justifyContent: "",
    alignItems: "",
  },
  contBottomData2: {
    flexDirection: "row",
    justifyContent: "",
    alignItems: "",
  },
  dataimage: {
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: "50%",
  },
  dataText: {
    flexDirection: "column",
    justifyContent: "space-evenly", //hizalama
    alignItems: "",
  },
  dataTextName: {
    color: "black",
    fontFamily: "arial",
    fontSize: 13,
    fontWeight: "bold",
  },

  dataTextMessage: {
    color: "#505050",
    fontFamily: "arial",
    fontSize: 13,
    fontWeight: "100",
  },
  contSendM: {
    paddingLeft: 16,
    paddingTop: 16,
    justifyContent: "",
    alignItems: "",
    backgroundColor: "#128c7e",
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: "50%",
  },
  touchable: {
    alignSelf: "flex-end",
    position: "relative",
    bottom: 20,
  },
});

export default styles;
