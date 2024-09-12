const AddInsightTags = {"body":{"type":"object","required":["insights"],"properties":{"insights":{"type":"array","description":"List of insight IDs","items":{"type":"string"}},"tags":{"type":"array","description":"List of tags to be added to insights","items":{"type":"string"}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"400":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const AddLocationTags = {"body":{"type":"object","required":["locations","tags"],"properties":{"locations":{"type":"array","description":"List of location IDs","items":{"type":"string"}},"tags":{"type":"array","description":"List of tags to be added to locations","items":{"type":"string"}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"400":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const DeleteAlertsId = {"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const DeleteInsightsId = {"metadata":{"allOf":[{"type":"object","properties":{"insightId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined insight"}},"required":["insightId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const DeleteLocationsId = {"metadata":{"allOf":[{"type":"object","properties":{"locationId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined location"}},"required":["locationId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const EventsTimeline = {"body":{"type":"object","required":["location","insight"],"properties":{"location":{"type":"string","description":"This either get {\"locationId\": \"ID\"} or [Geometry](https://docs.tomorrow.io/reference/locations-overview) i.e        { \"geometry\": {             \"type\": \"Point\",             \"coordinates\": [                 -73.890,                 40.768             ]         }}","format":"json"},"insight":{"type":"string","description":"This is the conditions to be met. You can either pass here [Rules](https://docs.tomorrow.io/reference/insights-overview#rules-language-recommended) i.e {\"rules\": \"(temperature > 30)\"}. [conditions](https://docs.tomorrow.io/reference/insights-overview#conditions-language-ast-trees) i.e {\"conditions\": \"...\") or InsightId, i.e. {\"insightId\": \"....\"}","format":"json"}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"eventsTimeline":{"type":"object","properties":{"geometry":{"type":"object","properties":{"type":{"type":"string","examples":["Point"]},"coordinates":{"type":"array","items":{"type":"number","default":0,"examples":[-73.892]}}}},"items":{"type":"array","items":{"type":"object","properties":{"from":{"type":"string","examples":["2023-07-24T08:00:00Z"]},"active":{"type":"boolean","default":true,"examples":[false]},"actualValues":{"type":"object","properties":{"cloudCover":{"type":"integer","default":0,"examples":[98]},"temperature":{"type":"number","default":0,"examples":[25.5]}}},"actualTriggerValues":{"type":"object","properties":{"cloudCover":{"type":"integer","default":0,"examples":[98]},"temperature":{"type":"number","default":0,"examples":[25.5]}}}}}},"itemsStartTime":{"type":"string","examples":["2023-07-24T08:00:00Z"]},"itemsEndTime":{"type":"string","examples":["2023-07-29T08:00:00Z"]}}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"400":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetAlerts = {"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"alerts":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","examples":["38f689d83c264eb0b084ba095f2ea743"]},"insight":{"type":"string","examples":["38f689d83c264eb0b084ba095f2ea332"]},"name":{"type":"string","examples":["De-icing Conditions Alert"]},"isActive":{"type":"boolean","default":true,"examples":[true]},"notifications":{"type":"array","items":{"type":"string","examples":["...notifications"]}},"createdAt":{"type":"string","examples":["2020-05-10T06:49:34+0000"]},"updatedAt":{"type":"string","examples":["2020-05-11T08:22:34+0000"]}}}}}},"links":{"type":"object","properties":{}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetAlertsId = {"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"alert":{"type":"object","properties":{"id":{"type":"string","examples":["38f689d83c264eb0b084ba095f2ea743"]},"insight":{"type":"string","examples":["38f689d83c264eb0b084ba095f2ea332"]},"name":{"type":"string","examples":["De-icing Conditions Alert"]},"isActive":{"type":"boolean","default":true,"examples":[true]},"notifications":{"type":"array","items":{"type":"string","examples":["...notifications"]}},"createdAt":{"type":"string","examples":["2020-05-10T06:49:34+0000"]},"updatedAt":{"type":"string","examples":["2020-05-11T08:22:34+0000"]}}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetEvents = {"metadata":{"allOf":[{"type":"object","properties":{"location":{"type":"string","format":"json","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined location or latlong string - see [formats](https://docs.tomorrow.io/reference/api-formats#locations)"},"insights":{"type":"array","items":{"type":"string"},"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Pre-defined category names or custom insight IDs"},"buffer":{"type":"number","format":"float","default":1,"minimum":-3.402823669209385e+38,"maximum":3.402823669209385e+38,"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"The buffer around locations, in case of pre-defined insight categories (in km)"}},"required":["location","insights"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"events":{"type":"array","items":{}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetInsights = {"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetInsightsId = {"metadata":{"allOf":[{"type":"object","properties":{"insightId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined insight"}},"required":["insightId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetLocations = {"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"locations":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","examples":["5e82fb82b66492001218aaf3"]},"name":{"type":"string","examples":["Tomorrow.io Headquarters"]},"geometry":{"type":"object","properties":{"type":{"type":"string","examples":["Point"]},"coordinates":{"type":"array","items":{"type":"number","default":0,"examples":[42.35544]}}}}}}}}},"links":{"type":"object","properties":{}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetLocationsId = {"metadata":{"allOf":[{"type":"object","properties":{"locationId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined location"}},"required":["locationId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"location":{"type":"object","properties":{"id":{"type":"string","examples":["5e82fb82b66492001218aaf3"]},"name":{"type":"string","examples":["Tomorrow.io Headquarters"]},"geometry":{"type":"object","properties":{"type":{"type":"string","examples":["Point"]},"coordinates":{"type":"array","items":{"type":"number","default":0,"examples":[42.35544]}}}}}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const ListNotificationsGet = {"metadata":{"allOf":[{"type":"object","properties":{"startTime":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Start time in ISO 8601 format \"2019-03-20T14:09:50Z\""},"endTime":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"End time in ISO 8601 format \"2019-03-20T14:09:50Z\""},"alertIds":{"type":"array","items":{"type":"string"},"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Filter by pre-defined alert IDs"},"notificationTypes":{"type":"array","items":{"type":"string"},"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Filter by [notification types](ref:overview-notifications#notification-configuration): [PRIOR, START, END,  PUBLISH]"},"recipients":{"type":"array","items":{"type":"string"},"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Filter by user IDs"},"status":{"type":"array","items":{"type":"string"},"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Filter by [status](ref:overview-notifications#notification-status): [ acknowledged, sent ]"},"locationIds":{"type":"array","items":{"type":"string"},"$schema":"https://json-schema.org/draft/2020-12/schema#","description":"Filter by pre-defined location IDs"}},"required":[]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostAlerts = {"body":{"type":"object","required":["name","insight"],"properties":{"name":{"type":"string","description":"The name of the alert used by triggered alerts"},"insight":{"type":"string","description":"ID of a custom insight or pre-defined Severe Weather Event category - e.g. \"floods\" or ”lightning” for lightning alerts"},"isActive":{"type":"boolean","description":"Defines whether the alert triggers notifications to the webhook","default":true},"notifications":{"type":"string","description":"The configuration of the notifications sent to the webhook (`PRIOR`, `START`, and `END` are available for Insight Alerts and `PUBLISH` is available for Severe Weather Event Alerts only).","format":"json"},"lightningConfig":{"type":"string","description":"configuration of lightning alert with following properties:  `lightningTypes` - an array of possible lightning types based on which alert detection happens. Allowed values: `C2C` (cloud to cloud) and `C2G` (cloud to ground). `buffers` - an array of radiuses based on which the alert detection happens (as soon as lightning strike occurs in one of the buffer, the alert notification is triggered). Minimum buffer value 0.6 and maximum value 48. Note that only first strike within the buffer triggers the alert notification.  `ttl` - duration of all-clear notification since the last strike happen within the buffer `distanceUnit` - the unit of buffer distance, allowed values `km` (kilometers) or `mi` (miles)","format":"json"}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostAlertsIdActivate = {"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostAlertsIdDeactivate = {"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostAlertsIdLocations = {"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"locations":{"type":"array","items":{"type":"string","examples":["5e82fb82b66492001218aaf3"]}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostAlertsIdLocationsLink = {"body":{"type":"object","required":["locations"],"properties":{"locations":{"type":"array","description":"The list of Locations by ID to be linked to this Alert.","items":{"type":"string"}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostAlertsIdLocationsUnlink = {"body":{"type":"object","required":["locations"],"properties":{"locations":{"type":"array","description":"The list of Point locations by ID to be unlinked from this alert.","items":{"type":"string"}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostEvents = {"body":{"type":"object","required":["insights"],"properties":{"location":{"type":"string","description":"ID of a pre-defined location, GeoJSON geometry or latlong array - see [formats](https://docs.tomorrow.io/reference/api-formats#locations)","format":"json"},"insights":{"type":"array","description":"Pre-defined category names or custom insight IDs","items":{"type":"string"}},"buffer":{"type":"number","description":"The buffer around locations, in case of pre-defined insight categories (in km)","default":1,"format":"float","minimum":-3.402823669209385e+38,"maximum":3.402823669209385e+38}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"events":{"type":"array","items":{}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostInsights = {"body":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The name of the insight used when setting alert notifications"},"rules":{"type":"string","description":"The [rules](https://docs.tomorrow.io/reference/insights-overview#rules-language) for which the linked locations will be checked. **Either rules or conditions is required** i.e (windSpeed > 30)"},"conditions":{"type":"string","description":"The [conditions](https://docs.tomorrow.io/reference/insights-overview#conditions-language-ast-trees) for which the linked locations will be checked. Either rules or conditions is required","format":"json"},"tags":{"type":"array","description":"Any descriptive tags to be used to filter insights","items":{"type":"string"}},"severity":{"type":"string","description":"The code denoting the intensity of impact when conditions occur (extreme, severe, moderate, minor, unknown)","default":"unknown"},"description":{"type":"string","description":"The description detailing this insight use-case"}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"201":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PostLocations = {"body":{"type":"object","required":["name","geometry"],"properties":{"name":{"type":"string","description":"The name of the location"},"geometry":{"type":"string","description":"The GeoJSON geometry representation of the location object","format":"json"},"tags":{"type":"array","items":{"type":"string"}},"direction":{"type":"number","description":"The location direction in degrees clockwise from due north","format":"float","minimum":-3.402823669209385e+38,"maximum":3.402823669209385e+38}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PutAlertsId = {"body":{"type":"object","properties":{"name":{"type":"string","description":"The name of the alert used by triggered alerts"},"notifications":{"type":"string","description":"The configuration of the notifications sent to the webhook (`PRIOR`, `START`, and `END` are available for Insight Alerts and `PUBLISH` is available for Severe Weather Event Alerts only).","format":"json"},"lightningConfig":{"type":"string","description":"configuration of lightning alert with following properties:  `lightningTypes` - an array of possible lightning types based on which alert detection happens. Allowed values: `C2C` (cloud to cloud) and `C2G` (cloud to ground). `buffers` - an array of radiuses based on which the alert detection happens (as soon as lightning strike occurs in one of the buffer, the alert notification is triggered). Minimum buffer value 0.6 and maximum value 48. Note that only first strike within the buffer triggers the alert notification.  `ttl` - duration of all-clear notification since the last strike happen within the buffer `distanceUnit` - the unit of buffer distance, allowed values `km` (kilometers) or `mi` (miles)","format":"json"}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"alertId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined alert"}},"required":["alertId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"alert":{"type":"object","properties":{"id":{"type":"string","examples":["38f689d83c264eb0b084ba095f2ea743"]},"insight":{"type":"string","examples":["38f689d83c264eb0b084ba095f2ea332"]},"name":{"type":"string","examples":["De-icing Conditions Alert"]},"isActive":{"type":"boolean","default":true,"examples":[true]},"notifications":{"type":"array","items":{"type":"string","examples":["...notifications"]}},"createdAt":{"type":"string","examples":["2020-05-10T06:49:34+0000"]},"updatedAt":{"type":"string","examples":["2020-05-11T08:22:34+0000"]}}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PutInsightsId = {"body":{"type":"object","properties":{"name":{"type":"string","description":"The name of the insight used when triggering alert notifications"},"rules":{"type":"string","description":"The [rules](https://docs.tomorrow.io/reference/insights-overview#rules-language) for which the linked locations will be checked. i.e (windSpeed > 30)"},"conditions":{"type":"string","description":"The [conditions](https://docs.tomorrow.io/reference/insights-overview#conditions-language-ast-trees) for which the linked locations will be checked.","format":"json"},"tags":{"type":"array","description":"Any descriptive tags to be used to filter insights","items":{"type":"string"}},"severity":{"type":"string","description":"The code denoting the intensity of impact when conditions occur (extreme, severe, moderate, minor, unknown)","default":"unknown"},"description":{"type":"string","description":"The description detailing this insight use-case"}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"insightId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined insight"}},"required":["insightId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const PutLocationId = {"body":{"type":"object","properties":{"name":{"type":"string","description":"The name of the location. Name or direction parameters must be specified"},"direction":{"type":"number","description":"The location direction in degrees clockwise from due north","format":"float","minimum":-3.402823669209385e+38,"maximum":3.402823669209385e+38}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"locationId":{"type":"string","$schema":"https://json-schema.org/draft/2020-12/schema#","description":"ID of a pre-defined location"}},"required":["locationId"]},{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"type":"object","properties":{"data":{"type":"object","properties":{"location":{"type":"object","properties":{"id":{"type":"string","examples":["5e82fb82b66492001218aaf3"]},"name":{"type":"string","examples":["Tomorrow.io Headquarters"]},"geometry":{"type":"object","properties":{"type":{"type":"string","examples":["Point"]},"coordinates":{"type":"array","items":{"type":"number","default":0,"examples":[42.35544]}}}}}}}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const RemoveInsightTags = {"body":{"type":"object","required":["insights","tags"],"properties":{"insights":{"type":"array","description":"List of insight IDs","items":{"type":"string"}},"tags":{"type":"array","description":"List of tags to be removed from insights","items":{"type":"string"}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"400":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const RemoveLocationTags = {"body":{"type":"object","required":["locations","tags"],"properties":{"locations":{"type":"array","description":"List of location IDs","items":{"type":"string"}},"tags":{"type":"array","description":"List of tags to be removed from locations","items":{"type":"string"}}},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"metadata":{"allOf":[{"type":"object","properties":{"Accept-Encoding":{"type":"string","default":"gzip","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"204":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"},"400":{"type":"object","properties":{},"$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
export { AddInsightTags, AddLocationTags, DeleteAlertsId, DeleteInsightsId, DeleteLocationsId, EventsTimeline, GetAlerts, GetAlertsId, GetEvents, GetInsights, GetInsightsId, GetLocations, GetLocationsId, ListNotificationsGet, PostAlerts, PostAlertsIdActivate, PostAlertsIdDeactivate, PostAlertsIdLocations, PostAlertsIdLocationsLink, PostAlertsIdLocationsUnlink, PostEvents, PostInsights, PostLocations, PutAlertsId, PutInsightsId, PutLocationId, RemoveInsightTags, RemoveLocationTags }