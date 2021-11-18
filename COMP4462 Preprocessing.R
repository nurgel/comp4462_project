rm(list = ls())
library(jsonlite)
library(tidyverse)

#Loading in the JSON file
Business <- stream_in(file("yelp_academic_dataset_business.json"))

#Unnest the attributes and hours from the JSON file as they have a list within list structure
Business_A <- Business %>% select(-c(attributes,hours))
Business_B <- Business %>% select(attributes) %>% unnest()
BUsiness_C <- Business %>% select(hours) %>% unnest()

#Combining the seperate data.frames and setting all NA values to "Not Available" since JS does not support missing value
Result <- cbind(Business_A,Business_B,BUsiness_C)
Result[is.na(Result)] <- "Not Available"
write_csv(Result,"yelp_academic_dataset_business.csv")