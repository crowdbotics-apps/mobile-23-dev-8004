import axios from "axios"
import {} from "react-native-dotenv"
const plugin13 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7238/storyboard/8485/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newPlugin232 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/8004/storyboard/9273/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobile23API = axios.create({
  baseURL: "https://mobile-23-dev-8004.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return mobile23API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return mobile23API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return mobile23API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return mobile23API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return mobile23API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return mobile23API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return mobile23API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return mobile23API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return mobile23API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return mobile23API.post(`/api/v1/signup/`, requestBody)
}
function api_v1_ttest_list() {
  return mobile23API.get(`/api/v1/ttest/`)
}
function api_v1_ttest_create(requestBody) {
  return mobile23API.post(`/api/v1/ttest/`, requestBody)
}
function api_v1_ttest_read() {
  return mobile23API.get(`/api/v1/ttest/{id}/`)
}
function api_v1_ttest_update(requestBody) {
  return mobile23API.put(`/api/v1/ttest/{id}/`, requestBody)
}
function api_v1_ttest_partial_update(requestBody) {
  return mobile23API.patch(`/api/v1/ttest/{id}/`, requestBody)
}
function api_v1_ttest_delete() {
  return mobile23API.delete(`/api/v1/ttest/{id}/`)
}
function rest_auth_login_create(requestBody) {
  return mobile23API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return mobile23API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return mobile23API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return mobile23API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return mobile23API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return mobile23API.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return mobile23API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return mobile23API.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return mobile23API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return mobile23API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return mobile23API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_ttest_list,
  api_v1_ttest_create,
  api_v1_ttest_read,
  api_v1_ttest_update,
  api_v1_ttest_partial_update,
  api_v1_ttest_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
