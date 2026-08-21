import React from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#18171C",
        }}
      >
        <View
          style={{
            marginBottom: 4,
          }}
        >
          <View
            style={{
              height: 309,
              backgroundColor: "#222126",
            }}
          ></View>
          <ImageBackground
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/i2wjr8t5_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              flex: 1,
              paddingTop: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 8,
                paddingVertical: 15,
                marginBottom: 17,
                marginRight: 19,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 40,
                }}
              >
                {"10:01"}
              </Text>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 6,
                }}
              >
                <View
                  style={{
                    width: 3,
                    height: 3,
                    backgroundColor: "#FFFFFF",
                    marginRight: 1,
                  }}
                ></View>
                <View
                  style={{
                    width: 3,
                    height: 5,
                    backgroundColor: "#FFFFFF",
                    marginRight: 2,
                  }}
                ></View>
                <View
                  style={{
                    width: 3,
                    height: 8,
                    backgroundColor: "#FFFFFF",
                    marginRight: 2,
                  }}
                ></View>
                <View
                  style={{
                    width: 3,
                    height: 11,
                    backgroundColor: "#FFFFFF",
                  }}
                ></View>
              </View>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/atocxsj9_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 8,
                  width: 17,
                  height: 11,
                  marginRight: 5,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <View
                  style={{
                    borderColor: "#FFFFFF",
                    borderRadius: 3,
                    borderWidth: 1,
                    padding: 2,
                  }}
                >
                  <View
                    style={{
                      width: 11,
                      height: 7,
                      backgroundColor: "#FFFFFF",
                      borderRadius: 1,
                    }}
                  ></View>
                </View>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/cyfmxadz_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 2,
                    height: 3,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 23,
                marginHorizontal: 28,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/xi5uw176_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 8,
                  width: 40,
                  height: 44,
                }}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                }}
              >
                {"My Savings"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/041ty8l9_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 8,
                  width: 40,
                  height: 44,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/2qn8yvuw_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 104,
                  height: 37,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 7,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                }}
              >
                {"Total Saving"}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 56,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 36,
                  fontWeight: "bold",
                }}
              >
                {"$ 10,000.89"}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 29,
            marginHorizontal: 28,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
            }}
          >
            {"Savings"}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
            }}
          >
            {"Add new goal"}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 41,
            marginBottom: 27,
            marginHorizontal: 28,
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 31,
              left: 31,
              height: 106,
              backgroundColor: "#222126",
              borderColor: "#2D2C31",
              borderRadius: 14,
              borderWidth: 1,
              shadowColor: "#1018280D",
              shadowOpacity: 0.1,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 11,
              elevation: 11,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 13,
              left: 13,
              height: 106,
              backgroundColor: "#222126",
              borderColor: "#2D2C31",
              borderRadius: 14,
              borderWidth: 1,
              shadowColor: "#0000004F",
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 24,
              elevation: 24,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#222126",
              borderColor: "#2D2C31",
              borderRadius: 14,
              borderWidth: 1,
              paddingVertical: 20,
              paddingHorizontal: 18,
              shadowColor: "#0000004F",
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 24,
              elevation: 24,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#DFF9AF",
                borderRadius: 8,
                paddingVertical: 13,
                paddingHorizontal: 18,
                marginRight: 14,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 40,
                }}
              >
                {"🏝️"}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 3,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"Trip to Zanzibar"}
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                  }}
                >
                  {"$ 800"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 7,
                  marginHorizontal: 2,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"10 Days left"}
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 10,
                  }}
                >
                  {"-$200"}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#FFFFFF1A",
                  borderRadius: 19,
                }}
              >
                <View
                  style={{
                    width: 152,
                    height: 11,
                    backgroundColor: "#B2DB5E",
                    borderRadius: 19,
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            marginBottom: 23,
            marginLeft: 28,
          }}
        >
          {"Group savings"}
        </Text>
        <View
          style={{
            backgroundColor: "#B2DB5E",
            borderRadius: 11,
            paddingVertical: 12,
            marginBottom: 17,
            marginHorizontal: 28,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 17,
              marginHorizontal: 16,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#18171C",
                  fontSize: 14,
                  marginBottom: 10,
                  marginRight: 21,
                }}
              >
                {"Friends Club Wallet "}
              </Text>
              <Text
                style={{
                  color: "#18171C",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {"$ 10,000.89"}
              </Text>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/7jt3k9yl_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 26,
                width: 39,
                height: 39,
              }}
            />
          </View>
          <View
            style={{
              marginHorizontal: 14,
            }}
          >
            <View
              style={{
                backgroundColor: "#18171C1A",
                borderRadius: 33,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#627834",
                  borderRadius: 33,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/nwfb5jxu_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 42,
                    width: 38,
                    height: 38,
                    marginRight: 7,
                  }}
                />
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 2,
                    }}
                  >
                    {"$2,000"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Janet Janet"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#18171C1A",
                borderRadius: 33,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#627834",
                  borderRadius: 33,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/h2a5jduj_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 42,
                    width: 38,
                    height: 38,
                    marginRight: 7,
                  }}
                />
                <View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 2,
                      marginRight: 50,
                    }}
                  >
                    {"$5,800"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Emmanuel Emmanuel"}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#18171C1A",
                borderRadius: 33,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#627834",
                  borderRadius: 33,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/imf4yrox_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    borderRadius: 42,
                    width: 38,
                    height: 38,
                    marginRight: 7,
                  }}
                />
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      marginBottom: 2,
                    }}
                  >
                    {"$9,500"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Christina E"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 103,
            backgroundColor: "#161519",
            paddingVertical: 29,
            shadowColor: "#00000080",
            shadowOpacity: 0.5,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowRadius: 11,
            elevation: 11,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
              marginLeft: 38,
              marginRight: 25,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/xvozuia3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 24,
                  height: 24,
                  marginBottom: 3,
                }}
              />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 9,
                }}
              >
                {"Home"}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/esv09x5n_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 24,
                    height: 24,
                    marginBottom: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 9,
                  }}
                >
                  {"Transfer"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/7qqo6xtf_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 24,
                    height: 24,
                    marginBottom: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 9,
                  }}
                >
                  {"Pay Bills"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/ru60wguf_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 24,
                    height: 24,
                    marginBottom: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#B2DB5E",
                    fontSize: 9,
                  }}
                >
                  {"Savings"}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/2sf489gk_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 24,
                    height: 24,
                    marginBottom: 3,
                  }}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 9,
                  }}
                >
                  {"Spendings"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/vzfytj34_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 29,
                height: 1,
                marginRight: 119,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
