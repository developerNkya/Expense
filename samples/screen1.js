import React from "react";
import { View, ScrollView, Text, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          paddingTop: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 8,
            paddingVertical: 15,
            marginBottom: 45,
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
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/w4089vxz_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/2w228isy_expires_30_days.png",
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
            alignItems: "center",
            marginBottom: 35,
            marginHorizontal: 28,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/all2nsu8_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 8,
              width: 40,
              height: 40,
              marginRight: 8,
            }}
          />
          <View
            style={{
              width: 68,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                marginBottom: 4,
              }}
            >
              {"Zaburi Frolian"}
            </Text>
            <View
              style={{
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                  marginRight: 6,
                }}
              >
                {"See more"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/gugvyda8_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 12,
                  height: 12,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          ></View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/3idzpdxh_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 25,
              height: 25,
              marginRight: 32,
            }}
          />
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/3h5pqh5z_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 8,
              width: 40,
              height: 44,
            }}
          />
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 10,
            marginBottom: 8,
            marginLeft: 28,
          }}
        >
          {"Card Balance"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
            marginHorizontal: 28,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            {"$ 50,093.84"}
          </Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/u2vuryu0_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 28,
            marginHorizontal: 28,
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#EC7D51", "#F5CA58"]}
            style={{
              height: 192,
              borderRadius: 17,
            }}
          ></LinearGradient>
          <ImageBackground
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/ky4wjqx4_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            imageStyle={{ borderRadius: 17 }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              flex: 1,
              paddingTop: 11,
              paddingRight: 21,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/32h9hn1s_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 17,
                width: 69,
                height: 38,
                marginBottom: 102,
                marginLeft: 21,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 23,
                marginLeft: 21,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"****5638"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"4/25"}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            marginBottom: 16,
            marginLeft: 28,
          }}
        >
          {"Spendings"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#2D2C3175",
            borderColor: "#2D2C31",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 18,
            marginBottom: 28,
            marginHorizontal: 26,
          }}
        >
          <View
            style={{
              marginLeft: 24,
              marginRight: 13,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 24,
                marginBottom: 6,
              }}
            >
              {"$5780.87"}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                marginRight: 39,
              }}
            >
              {"Last 30 Days"}
            </Text>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/h8xhpaan_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 10,
              width: 72,
              height: 40,
            }}
          />
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          ></View>
          <View
            style={{
              marginRight: 12,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/t8726o75_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 10,
                width: 31,
                height: 25,
                marginBottom: 7,
                marginLeft: 34,
              }}
            />
            <Text
              style={{
                color: "#B2DB5E",
                fontSize: 12,
              }}
            >
              {"Freeze Card"}
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            marginBottom: 17,
            marginLeft: 28,
          }}
        >
          {"Transactions"}
        </Text>
        <View
          style={{
            marginBottom: 48,
            marginHorizontal: 28,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/zl5ovnkr_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 31,
                  width: 45,
                  height: 45,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  width: 124,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    marginBottom: 7,
                  }}
                >
                  {"Figma"}
                </Text>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                      marginRight: 5,
                    }}
                  >
                    {"Tue, 09-10-2024"}
                  </Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/uo391znn_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 3,
                      height: 3,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"01:00 AM"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"-$29.90"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/kpe9tj3c_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 31,
                  width: 45,
                  height: 45,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  width: 127,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    marginBottom: 7,
                  }}
                >
                  {"Naomi Mwakyusa"}
                </Text>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                      marginRight: 6,
                    }}
                  >
                    {"Mon, 10-02-2024"}
                  </Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/jbfvjj7d_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 3,
                      height: 3,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"10:00 PM"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"-$348.00"}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/gkkzagud_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 31,
                  width: 45,
                  height: 45,
                  marginRight: 16,
                }}
              />
              <View
                style={{
                  width: 124,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    marginBottom: 7,
                  }}
                >
                  {"Facebook Ads"}
                </Text>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                      marginRight: 12,
                    }}
                  >
                    {"Tue, 09-10-2024"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"13:00 AM"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignSelf: "stretch",
                }}
              ></View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                {"-$5000"}
              </Text>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: -86,
              right: -28,
              left: -28,
              backgroundColor: "#161519",
              paddingVertical: 29,
              paddingHorizontal: 38,
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
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/i63i77o8_expires_30_days.png",
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
                    marginBottom: 5,
                  }}
                >
                  {"Home"}
                </Text>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/ehpncgys_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 18,
                    height: 1,
                  }}
                />
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
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/n6enkytz_expires_30_days.png",
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
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/pv023wzk_expires_30_days.png",
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
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/4ibt8nnc_expires_30_days.png",
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
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/95t7wexf_expires_30_days.png",
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
