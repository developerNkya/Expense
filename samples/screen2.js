import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
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
            marginBottom: 38,
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
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0skjkuge_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/q3ieyzl4_expires_30_days.png",
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
            marginBottom: 8,
            marginHorizontal: 25,
          }}
        >
          <View
            style={{
              width: 40,
              height: 44,
            }}
          ></View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
            }}
          >
            {"Send Money"}
          </Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/uivq8cuc_expires_30_days.png",
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
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 27,
            marginHorizontal: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              marginRight: 7,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/gg3501hl_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 49,
                width: 50,
                height: 50,
              }}
            />
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/v0nwwpq3_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 49,
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0k2x2q81_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 49,
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/8751bx1s_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 101,
              height: 101,
              marginRight: 7,
            }}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0oattoqm_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 49,
                width: 50,
                height: 50,
              }}
            />
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/tytot7mk_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 49,
                  width: 50,
                  height: 50,
                }}
              />
            </View>
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0sqidvsj_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 49,
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#2D2C3175",
            borderColor: "#2D2C31",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 11,
            paddingRight: 18,
            marginBottom: 41,
            marginHorizontal: 28,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              marginBottom: 13,
              marginLeft: 19,
            }}
          >
            {"Send to"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 18,
            }}
          >
            <View
              style={{
                width: 161,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/emchdcz8_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 31,
                  width: 45,
                  height: 45,
                  marginRight: 9,
                }}
              />
              <View
                style={{
                  width: 107,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 14,
                    marginBottom: 1,
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
                      marginRight: 5,
                    }}
                  >
                    {"****8738"}
                  </Text>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/0m6xl7x4_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#B2DB5E",
                  fontSize: 10,
                  marginRight: 6,
                }}
              >
                {"Edit Info"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/nsf46kv6_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 47,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 36,
            }}
          >
            {"$ 500.10"}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 37,
            marginHorizontal: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"1"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"2"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"3"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"4"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"5"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"6"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"7"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"8"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"9"}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"."}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#222126",
                borderColor: "#2D2C31",
                borderRadius: 15,
                borderWidth: 1,
                paddingVertical: 6,
                marginRight: 9,
              }}
              onPress={() => alert("Pressed!")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 28,
                }}
              >
                {"0"}
              </Text>
            </TouchableOpacity>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/y07ypyz2_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 15,
                height: 46,
                flex: 1,
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 31,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#B2DB5E",
              borderRadius: 6,
              paddingVertical: 12,
              paddingHorizontal: 38,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/6ddqncw6_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 6,
                width: 18,
                height: 18,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                color: "#18171C",
                fontSize: 12,
              }}
            >
              {"Send $500.10"}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
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
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/eyxu96id_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/hmdzn663_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/xhvhz0ih_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/4o213nde_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/pn6m9byr_expires_30_days.png",
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
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/h4QB2pSp3c/1bdfzf3k_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 31,
              height: 1,
              marginLeft: 114,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
