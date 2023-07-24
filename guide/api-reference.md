# REST API Reference

## List Enabled BI Tables

This API endpoint enables you to retrieve a list of enabled BI tables available for integration with your BI tools. The response will include information about table names, and data types.

#### Request

### GET `/api/pbi/tables`

| Parameter       | Where  | Description  |
| --------------- | ------ | ------------ |
| `Authorization` | Header | Bearer token |

#### Response

| Parameter       | Type   | Description                                                                             |
| --------------- | ------ | --------------------------------------------------------------------------------------- |
| `data`          | Array  |                                                                                         |
| -`entity_name`  | String | Entity disply name                                                                      |
| -`unique_name`  | String | Table unique name                                                                       |
| -`data_types`   | Object | Contains data type of each column of a table                                            |
| --`type`        | String | Possible values: `Text`, `Date`, `Int64`, `Double`, `Percentage`, `DateTime`, `Logical` |
| --`primitive`   | String | Possible values: `text`, `date`, `number`, `datetime`, `logical`                        |
| `meta`          | Object |                                                                                         |
| -`numOfReports` | Number | Number of enabled tables                                                                |

#### Example response

```json
{
  "data": [
    {
      "entity_name": "Employee",
      "unique_name": "v_pbi_employee_v1",
      "data_types": {
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "employee_id": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_status": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_firstname": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_middlename": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_lastname": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_fullname": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_work_email": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_mobile": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_work_telephone": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_dob": {
          "primitive": "date",
          "type": "Date"
        },
        "emp_driving_license_exp_date": {
          "primitive": "date",
          "type": "Date"
        },
        "emp_marital_status": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_gender": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_eeo_race_ethnicity": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_nationality": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_supervisor_key_list": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_supervisor_type_list": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_supervisor_count": {
          "primitive": "number",
          "type": "Int64"
        },
        "emp_other_id": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_creation_date": {
          "primitive": "date",
          "type": "Date"
        },
        "emp_termination_date": {
          "primitive": "date",
          "type": "Date"
        },
        "emp_termination_reason": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_purge_date": {
          "primitive": "text",
          "type": "Text"
        },
        "emp_custom_name_list": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_custom_value_list": {
          "type": "Text",
          "primitive": "text"
        },
        "emp_custom_count": {
          "primitive": "number",
          "type": "Int64"
        }
      }
    },
    {
      "entity_name": "Attendance",
      "unique_name": "v_pbi_attendance_v1",
      "data_types": {
        "attendance_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "attend_in_utc": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "attend_in_note": {
          "type": "Text",
          "primitive": "text"
        },
        "attend_in_time_offset": {
          "type": "Text",
          "primitive": "text"
        },
        "attend_in_user_time": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "attend_out_utc": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "attend_out_note": {
          "type": "Text",
          "primitive": "text"
        },
        "attend_out_time_offset": {
          "type": "Text",
          "primitive": "text"
        },
        "attend_out_user_time": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "attend_state": {
          "type": "Text",
          "primitive": "text"
        },
        "attend_duration": {
          "primitive": "number",
          "type": "Double"
        },
        "attend_approval_state": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Leave",
      "unique_name": "v_pbi_leave_v1",
      "data_types": {
        "leave_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "leave_date": {
          "primitive": "date",
          "type": "Date"
        },
        "leave_hours": {
          "primitive": "number",
          "type": "Double"
        },
        "leave_days": {
          "primitive": "number",
          "type": "Double"
        },
        "leave_status": {
          "type": "Text",
          "primitive": "text"
        },
        "leave_type": {
          "type": "Text",
          "primitive": "text"
        },
        "leave_start_time": {
          "primitive": "text",
          "type": "Text"
        },
        "leave_end_time": {
          "primitive": "text",
          "type": "Text"
        },
        "leave_start_utc": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "leave_end_utc": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "leave_duration_type": {
          "type": "Text",
          "primitive": "text"
        },
        "leave_applied_date": {
          "primitive": "date",
          "type": "Date"
        }
      }
    },
    {
      "entity_name": "Performance",
      "unique_name": "v_pbi_performance_v1",
      "data_types": {
        "perf_final_rating_percentage": {
          "primitive": "number",
          "type": "Percentage"
        },
        "perf_9box_matrix_applicable": {
          "primitive": "logical",
          "type": "Logical"
        },
        "perf_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_description": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_from_date": {
          "primitive": "date",
          "type": "Date"
        },
        "perf_to_date": {
          "primitive": "date",
          "type": "Date"
        },
        "perf_due_date": {
          "primitive": "date",
          "type": "Date"
        },
        "perf_state": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_template": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_appraisal_cycle": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_final_rating": {
          "primitive": "number",
          "type": "Double"
        },
        "perf_rating_category": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_potential_rating_category": {
          "type": "Text",
          "primitive": "text"
        },
        "perf_9box_category": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Job State Change",
      "unique_name": "v_pbi_job_state_change_v1",
      "data_types": {
        "job_flsa_exempt": {
          "primitive": "logical",
          "type": "Logical"
        },
        "job_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "job_effective_from": {
          "primitive": "date",
          "type": "Date"
        },
        "job_effective_to": {
          "primitive": "date",
          "type": "Date"
        },
        "job_event": {
          "type": "Text",
          "primitive": "text"
        },
        "job_job_title": {
          "type": "Text",
          "primitive": "text"
        },
        "job_employment_status": {
          "type": "Text",
          "primitive": "text"
        },
        "job_job_category": {
          "type": "Text",
          "primitive": "text"
        },
        "job_subunit": {
          "type": "Text",
          "primitive": "text"
        },
        "location_id": {
          "type": "Text",
          "primitive": "text"
        },
        "job_join_date": {
          "primitive": "date",
          "type": "Date"
        },
        "job_probation_end_date": {
          "primitive": "date",
          "type": "Date"
        },
        "job_date_of_permanency": {
          "primitive": "date",
          "type": "Date"
        },
        "job_work_shift": {
          "type": "Text",
          "primitive": "text"
        },
        "job_cost_center": {
          "type": "Text",
          "primitive": "text"
        },
        "job_eeo_job_category": {
          "type": "Text",
          "primitive": "text"
        },
        "job_pay_policy": {
          "type": "Text",
          "primitive": "text"
        },
        "job_custom_name_list": {
          "type": "Text",
          "primitive": "text"
        },
        "job_custom_value_list": {
          "type": "Text",
          "primitive": "text"
        },
        "job_custom_count": {
          "primitive": "number",
          "type": "Int64"
        },
        "job_status": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Salary State Change",
      "unique_name": "v_pbi_salary_state_change_v1",
      "data_types": {
        "sal_history_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "sal_effective_from": {
          "primitive": "date",
          "type": "Date"
        },
        "sal_effective_to": {
          "primitive": "date",
          "type": "Date"
        },
        "sal_event": {
          "type": "Text",
          "primitive": "text"
        },
        "sal_paygrade": {
          "type": "Text",
          "primitive": "text"
        },
        "sal_currency": {
          "type": "Text",
          "primitive": "text"
        },
        "sal_eeo_paygrade": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Vacancy",
      "unique_name": "v_pbi_vacancy_v1",
      "data_types": {
        "vacancy_id": {
          "type": "Text",
          "primitive": "text"
        },
        "vac_name": {
          "type": "Text",
          "primitive": "text"
        },
        "vac_job_title": {
          "type": "Text",
          "primitive": "text"
        },
        "vac_count": {
          "primitive": "number",
          "type": "Int64"
        },
        "vac_status": {
          "type": "Text",
          "primitive": "text"
        },
        "vac_creation_date": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "vac_published_date": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "location_id": {
          "type": "Text",
          "primitive": "text"
        },
        "vac_subunit": {
          "type": "Text",
          "primitive": "text"
        },
        "vac_hiring_manager_count": {
          "primitive": "number",
          "type": "Int64"
        },
        "vac_hiring_manager_list": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Candidate Application",
      "unique_name": "v_pbi_candidate_application_v1",
      "data_types": {
        "can_app_hired": {
          "primitive": "logical",
          "type": "Logical"
        },
        "can_app_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "vacancy_id": {
          "type": "Text",
          "primitive": "text"
        },
        "can_app_application_date": {
          "primitive": "date",
          "type": "Date"
        },
        "can_app_firstname": {
          "type": "Text",
          "primitive": "text"
        },
        "can_app_middlename": {
          "type": "Text",
          "primitive": "text"
        },
        "can_app_lastname": {
          "type": "Text",
          "primitive": "text"
        },
        "can_app_email": {
          "type": "Text",
          "primitive": "text"
        },
        "can_app_mobile": {
          "type": "Text",
          "primitive": "text"
        },
        "can_app_application_stage": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "User Account",
      "unique_name": "v_pbi_user_account_v1",
      "data_types": {
        "user_account_id": {
          "type": "Text",
          "primitive": "text"
        },
        "username": {
          "type": "Text",
          "primitive": "text"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "account_status": {
          "type": "Text",
          "primitive": "text"
        },
        "account_ess_role": {
          "type": "Text",
          "primitive": "text"
        },
        "account_supervisor_role": {
          "type": "Text",
          "primitive": "text"
        },
        "account_admin_role": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Login",
      "unique_name": "v_pbi_login_v1",
      "data_types": {
        "login_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "user_account_id": {
          "type": "Text",
          "primitive": "text"
        },
        "login_time": {
          "primitive": "text",
          "type": "Text"
        }
      }
    },
    {
      "entity_name": "Holidays",
      "unique_name": "v_pbi_public_holidays_v1",
      "data_types": {
        "holiday_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "holiday_name": {
          "type": "Text",
          "primitive": "text"
        },
        "holiday_date": {
          "primitive": "date",
          "type": "Date"
        },
        "location_id": {
          "type": "Text",
          "primitive": "text"
        },
        "holiday_length": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Timesheet",
      "unique_name": "v_pbi_timesheet_v1",
      "data_types": {
        "time_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "time_start_time": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "time_end_time": {
          "primitive": "datetime",
          "type": "DateTime"
        },
        "time_duration": {
          "primitive": "number",
          "type": "Int64"
        },
        "time_approval_state": {
          "type": "Text",
          "primitive": "text"
        },
        "time_project": {
          "type": "Text",
          "primitive": "text"
        },
        "time_activity": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Location",
      "unique_name": "v_pbi_location_v1",
      "data_types": {
        "location_id": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_name": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_country_code": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_timezone": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_province": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_city": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_address": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_zipcode": {
          "type": "Text",
          "primitive": "text"
        },
        "loc_phone": {
          "type": "Text",
          "primitive": "text"
        }
      }
    },
    {
      "entity_name": "Leave Entitlement",
      "unique_name": "v_pbi_leave_entitlement_v1",
      "data_types": {
        "entitlement_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "entitlement_leave_type": {
          "type": "Text",
          "primitive": "text"
        },
        "entitlement_type": {
          "type": "Text",
          "primitive": "text"
        },
        "entitlement_credited_date": {
          "primitive": "date",
          "type": "Date"
        },
        "entitlement_valid_from": {
          "primitive": "date",
          "type": "Date"
        },
        "entitlement_valid_to": {
          "primitive": "date",
          "type": "Date"
        },
        "entitlement_amount": {
          "primitive": "number",
          "type": "Double"
        },
        "entitlement_used": {
          "primitive": "number",
          "type": "Double"
        }
      }
    },
    {
      "entity_name": "Goal",
      "unique_name": "v_pbi_goals_v1",
      "data_types": {
        "goal_status_percentage": {
          "primitive": "number",
          "type": "Percentage"
        },
        "goal_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "employee_key": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_name": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_priority": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_creation_date": {
          "primitive": "date",
          "type": "Date"
        },
        "goal_due_date": {
          "primitive": "date",
          "type": "Date"
        },
        "goal_last_updated_date": {
          "primitive": "date",
          "type": "Date"
        },
        "goal_category": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_purpose": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_parent_goal_id": {
          "primitive": "number",
          "type": "Int64"
        },
        "goal_status": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_evaluator_groups": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_unit_of_measurement": {
          "type": "Text",
          "primitive": "text"
        },
        "goal_start_value": {
          "primitive": "number",
          "type": "Double"
        },
        "goal_current_value": {
          "primitive": "number",
          "type": "Double"
        },
        "goal_target_value": {
          "primitive": "number",
          "type": "Double"
        }
      }
    }
  ],
  "meta": {
    "numOfReports": 15
  }
}
```

## List Table Data

This API endpoint allows you to retrieve data for a specific table identified by its {unique_name}. You can use the table `unique_name` obtained from the `/api/pbi/tables` API to request relevant data for your BI reports and analytics.

#### Request

### GET `/api/pbi/tables/{unique_name}`

| Parameter       | Where  | Description                                                                                                         |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `Authorization` | Header | Bearer token                                                                                                        |
| `unique_name`   | Path   | `unique_name` of a table which are obtained from `/api/pbi/tables` endpoint                                         |
| `page[limit]`   | Query  | Specify the maximum number of results to be included in the API response                                            |
| `page[offset]`  | Query  | Control the starting point of data retrieval in paginated responses                                                 |
| `filter...`     | Query  | List of supported filter parameters based on table `unique_name`. Refer _Schema Guide_ to get better understanding. |

#### Response

| Parameter       | Type   | Description                                                                                                                                |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`          | Array  | This array contains list of objects, each object structure based on table `unique_name`. Refer _Schema Guide_ to get better understanding. |
| `meta`          | Object |                                                                                                                                            |
| -`name`         | String | Entity disply name                                                                                                                         |
| -`uniqueName`   | String | Table unique name                                                                                                                          |
| -`total`        | Number | Total number of records in the database                                                                                                    |
| -`filterValues` | Object | Filter fileds which set when making the API request                                                                                        |

#### Example response

```json
{
    "data": [
        {
            "employee_key": "emp_key_00000001",
            "employee_id": "EMP015",
            "emp_status": "Terminated",
            "emp_firstname": "Mike",
            "emp_middlename": "",
            "emp_lastname": "Mathews",
            "emp_fullname": "Mike Mathews",
            "emp_work_email": null,
            "emp_mobile": null,
            "emp_work_telephone": null,
            "emp_dob": "1988-06-18",
            "emp_driving_license_exp_date": "2019-12-17",
            "emp_marital_status": "Single",
            "emp_gender": "Male",
            "emp_eeo_race_ethnicity": "Hispanic or Latino",
            "emp_nationality": "Afghan",
            "emp_supervisor_key_list": "emp_key_00000063",
            "emp_supervisor_type_list": "Direct",
            "emp_supervisor_count": "1",
            "emp_other_id": "8514115451",
            "emp_creation_date": "2023-06-01",
            "emp_termination_date": "2023-06-06",
            "emp_termination_reason": "Contract Not Renewed",
            "emp_purge_date": null,
            "emp_custom_name_list": null,
            "emp_custom_value_list": null,
            "emp_custom_count": "0"
        },
        {
            "employee_key": "emp_key_00000002",
            "employee_id": "EMP016",
            "emp_status": "Active",
            "emp_firstname": "Jordan",
            "emp_middlename": "",
            "emp_lastname": "Mathews",
            "emp_fullname": "Jordan Mathews",
            "emp_work_email": "jordan@gmail.com",
            "emp_mobile": null,
            "emp_work_telephone": null,
            "emp_dob": "1989-04-12",
            "emp_driving_license_exp_date": "2019-04-12",
            "emp_marital_status": "Single",
            "emp_gender": "Male",
            "emp_eeo_race_ethnicity": "White",
            "emp_nationality": "Albanian",
            "emp_supervisor_key_list": "emp_key_00000063",
            "emp_supervisor_type_list": "Direct",
            "emp_supervisor_count": "1",
            "emp_other_id": "8514115452",
            "emp_creation_date": "2023-06-01",
            "emp_termination_date": null,
            "emp_termination_reason": null,
            "emp_purge_date": null,
            "emp_custom_name_list": null,
            "emp_custom_value_list": null,
            "emp_custom_count": "0"
        },
        {
            "employee_key": "emp_key_00000003",
            "employee_id": "EMP017",
            "emp_status": "Active",
            "emp_firstname": "Kevin",
            "emp_middlename": "",
            "emp_lastname": "Mathews",
            "emp_fullname": "Kevin Mathews",
            "emp_work_email": null,
            "emp_mobile": null,
            "emp_work_telephone": null,
            "emp_dob": "1984-08-23",
            "emp_driving_license_exp_date": "2019-08-23",
            "emp_marital_status": "Single",
            "emp_gender": "Male",
            "emp_eeo_race_ethnicity": "Black or African American",
            "emp_nationality": "Algerian",
            "emp_supervisor_key_list": "emp_key_00000078",
            "emp_supervisor_type_list": "Indirect",
            "emp_supervisor_count": "1",
            "emp_other_id": "8514115453",
            "emp_creation_date": "2023-06-01",
            "emp_termination_date": null,
            "emp_termination_reason": null,
            "emp_purge_date": null,
            "emp_custom_name_list": null,
            "emp_custom_value_list": null,
            "emp_custom_count": "0"
        },
        {
            "employee_key": "emp_key_00000004",
            "employee_id": "EMP018",
            "emp_status": "Active",
            "emp_firstname": "Okta",
            "emp_middlename": "",
            "emp_lastname": "Melbourne",
            "emp_fullname": "Okta Melbourne",
            "emp_work_email": null,
            "emp_mobile": null,
            "emp_work_telephone": null,
            "emp_dob": null,
            "emp_driving_license_exp_date": null,
            "emp_marital_status": null,
            "emp_gender": null,
            "emp_eeo_race_ethnicity": null,
            "emp_nationality": null,
            "emp_supervisor_key_list": "emp_key_00000003",
            "emp_supervisor_type_list": "Direct",
            "emp_supervisor_count": "1",
            "emp_other_id": "",
            "emp_creation_date": "2023-06-01",
            "emp_termination_date": null,
            "emp_termination_reason": null,
            "emp_purge_date": null,
            "emp_custom_name_list": null,
            "emp_custom_value_list": null,
            "emp_custom_count": "0"
        },
        {
            "employee_key": "emp_key_00000005",
            "employee_id": "EMP019",
            "emp_status": "Active",
            "emp_firstname": "Yvonne",
            "emp_middlename": "",
            "emp_lastname": "Michelin",
            "emp_fullname": "Yvonne Michelin",
            "emp_work_email": null,
            "emp_mobile": null,
            "emp_work_telephone": null,
            "emp_dob": null,
            "emp_driving_license_exp_date": null,
            "emp_marital_status": null,
            "emp_gender": null,
            "emp_eeo_race_ethnicity": null,
            "emp_nationality": null,
            "emp_supervisor_key_list": "emp_key_00000001",
            "emp_supervisor_type_list": "Direct",
            "emp_supervisor_count": "1",
            "emp_other_id": "",
            "emp_creation_date": "2023-06-01",
            "emp_termination_date": null,
            "emp_termination_reason": null,
            "emp_purge_date": null,
            "emp_custom_name_list": null,
            "emp_custom_value_list": null,
            "emp_custom_count": "0"
        }
    ],
    "meta": {
        "name": "Employee",
        "uniqueName": "v_pbi_employee_v1",
        "total": "134",
        "filterValues": {
            "emp_status": [
                "Active",
                "Terminated"
            ],
            "emp_creation_date:from": null,
            "emp_creation_date:to": null,
            "emp_termination_date:from": null,
            "emp_termination_date:to": null
        }
    }
}
```
