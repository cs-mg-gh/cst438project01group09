import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'climacell-docs/4.0.1 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * List Alerts
   *
   */
  getAlerts(metadata?: types.GetAlertsMetadataParam): Promise<FetchResponse<200, types.GetAlertsResponse200>> {
    return this.core.fetch('/alerts', 'get', metadata);
  }

  /**
   * Create an Alert
   *
   */
  postAlerts(body: types.PostAlertsBodyParam, metadata?: types.PostAlertsMetadataParam): Promise<FetchResponse<200, types.PostAlertsResponse200>> {
    return this.core.fetch('/alerts', 'post', body, metadata);
  }

  /**
   * Retrieve an Alert
   *
   */
  getAlertsId(metadata: types.GetAlertsIdMetadataParam): Promise<FetchResponse<200, types.GetAlertsIdResponse200>> {
    return this.core.fetch('/alerts/{alertId}', 'get', metadata);
  }

  /**
   * Update an Alert
   *
   */
  putAlertsId(body: types.PutAlertsIdBodyParam, metadata: types.PutAlertsIdMetadataParam): Promise<FetchResponse<200, types.PutAlertsIdResponse200>>;
  putAlertsId(metadata: types.PutAlertsIdMetadataParam): Promise<FetchResponse<200, types.PutAlertsIdResponse200>>;
  putAlertsId(body?: types.PutAlertsIdBodyParam | types.PutAlertsIdMetadataParam, metadata?: types.PutAlertsIdMetadataParam): Promise<FetchResponse<200, types.PutAlertsIdResponse200>> {
    return this.core.fetch('/alerts/{alertId}', 'put', body, metadata);
  }

  /**
   * Delete an Alert
   *
   */
  deleteAlertsId(metadata: types.DeleteAlertsIdMetadataParam): Promise<FetchResponse<204, types.DeleteAlertsIdResponse204>> {
    return this.core.fetch('/alerts/{alertId}', 'delete', metadata);
  }

  /**
   * List Insights
   *
   */
  getInsights(metadata?: types.GetInsightsMetadataParam): Promise<FetchResponse<200, types.GetInsightsResponse200>> {
    return this.core.fetch('/insights', 'get', metadata);
  }

  /**
   * Create an Insight
   *
   */
  postInsights(body: types.PostInsightsBodyParam, metadata?: types.PostInsightsMetadataParam): Promise<FetchResponse<201, types.PostInsightsResponse201>> {
    return this.core.fetch('/insights', 'post', body, metadata);
  }

  /**
   * Retrieve an Insight
   *
   */
  getInsightsId(metadata: types.GetInsightsIdMetadataParam): Promise<FetchResponse<200, types.GetInsightsIdResponse200>> {
    return this.core.fetch('/insights/{insightId}', 'get', metadata);
  }

  /**
   * Update an Insight
   *
   */
  putInsightsId(body: types.PutInsightsIdBodyParam, metadata: types.PutInsightsIdMetadataParam): Promise<FetchResponse<200, types.PutInsightsIdResponse200>>;
  putInsightsId(metadata: types.PutInsightsIdMetadataParam): Promise<FetchResponse<200, types.PutInsightsIdResponse200>>;
  putInsightsId(body?: types.PutInsightsIdBodyParam | types.PutInsightsIdMetadataParam, metadata?: types.PutInsightsIdMetadataParam): Promise<FetchResponse<200, types.PutInsightsIdResponse200>> {
    return this.core.fetch('/insights/{insightId}', 'put', body, metadata);
  }

  /**
   * Delete an Insight
   *
   */
  deleteInsightsId(metadata: types.DeleteInsightsIdMetadataParam): Promise<FetchResponse<204, types.DeleteInsightsIdResponse204>> {
    return this.core.fetch('/insights/{insightId}', 'delete', metadata);
  }

  /**
   * Retrieve a Location
   *
   */
  getLocationsId(metadata: types.GetLocationsIdMetadataParam): Promise<FetchResponse<200, types.GetLocationsIdResponse200>> {
    return this.core.fetch('/locations/{locationId}', 'get', metadata);
  }

  /**
   * Delete a Location
   *
   */
  deleteLocationsId(metadata: types.DeleteLocationsIdMetadataParam): Promise<FetchResponse<204, types.DeleteLocationsIdResponse204>> {
    return this.core.fetch('/locations/{locationId}', 'delete', metadata);
  }

  /**
   * Update a Location
   *
   */
  putLocationId(body: types.PutLocationIdBodyParam, metadata: types.PutLocationIdMetadataParam): Promise<FetchResponse<200, types.PutLocationIdResponse200>>;
  putLocationId(metadata: types.PutLocationIdMetadataParam): Promise<FetchResponse<200, types.PutLocationIdResponse200>>;
  putLocationId(body?: types.PutLocationIdBodyParam | types.PutLocationIdMetadataParam, metadata?: types.PutLocationIdMetadataParam): Promise<FetchResponse<200, types.PutLocationIdResponse200>> {
    return this.core.fetch('/locations/{locationId}', 'put', body, metadata);
  }

  /**
   * List Locations
   *
   */
  getLocations(metadata?: types.GetLocationsMetadataParam): Promise<FetchResponse<200, types.GetLocationsResponse200>> {
    return this.core.fetch('/locations', 'get', metadata);
  }

  /**
   * Create a Location
   *
   */
  postLocations(body: types.PostLocationsBodyParam, metadata?: types.PostLocationsMetadataParam): Promise<FetchResponse<200, types.PostLocationsResponse200>> {
    return this.core.fetch('/locations', 'post', body, metadata);
  }

  /**
   * Activate an Alert
   *
   */
  postAlertsIdActivate(metadata: types.PostAlertsIdActivateMetadataParam): Promise<FetchResponse<204, types.PostAlertsIdActivateResponse204>> {
    return this.core.fetch('/alerts/{alertId}/activate', 'post', metadata);
  }

  /**
   * Linked Locations
   *
   */
  postAlertsIdLocations(metadata: types.PostAlertsIdLocationsMetadataParam): Promise<FetchResponse<200, types.PostAlertsIdLocationsResponse200>> {
    return this.core.fetch('/alerts/{alertId}/locations', 'get', metadata);
  }

  /**
   * Unlink Locations
   *
   */
  postAlertsIdLocationsUnlink(body: types.PostAlertsIdLocationsUnlinkBodyParam, metadata: types.PostAlertsIdLocationsUnlinkMetadataParam): Promise<FetchResponse<204, types.PostAlertsIdLocationsUnlinkResponse204>> {
    return this.core.fetch('/alerts/{alertId}/locations/unlink', 'post', body, metadata);
  }

  /**
   * Deactivate an Alert
   *
   */
  postAlertsIdDeactivate(metadata: types.PostAlertsIdDeactivateMetadataParam): Promise<FetchResponse<204, types.PostAlertsIdDeactivateResponse204>> {
    return this.core.fetch('/alerts/{alertId}/deactivate', 'post', metadata);
  }

  /**
   * Link Locations
   *
   */
  postAlertsIdLocationsLink(body: types.PostAlertsIdLocationsLinkBodyParam, metadata: types.PostAlertsIdLocationsLinkMetadataParam): Promise<FetchResponse<204, types.PostAlertsIdLocationsLinkResponse204>> {
    return this.core.fetch('/alerts/{alertId}/locations/link', 'post', body, metadata);
  }

  /**
   * Retrieve Events (Advanced)
   *
   */
  postEvents(body: types.PostEventsBodyParam, metadata?: types.PostEventsMetadataParam): Promise<FetchResponse<200, types.PostEventsResponse200>> {
    return this.core.fetch('/events', 'post', body, metadata);
  }

  /**
   * Retrieve Events (Basic)
   *
   */
  getEvents(metadata: types.GetEventsMetadataParam): Promise<FetchResponse<200, types.GetEventsResponse200>> {
    return this.core.fetch('/events', 'get', metadata);
  }

  /**
   * Remove Location Tags
   *
   * @throws FetchError<400, types.RemoveLocationTagsResponse400> 400
   */
  removeLocationTags(body: types.RemoveLocationTagsBodyParam, metadata?: types.RemoveLocationTagsMetadataParam): Promise<FetchResponse<204, types.RemoveLocationTagsResponse204>> {
    return this.core.fetch('/locations/tags/remove', 'post', body, metadata);
  }

  /**
   * List Notifications
   *
   */
  listNotificationsGet(metadata?: types.ListNotificationsGetMetadataParam): Promise<FetchResponse<200, types.ListNotificationsGetResponse200>> {
    return this.core.fetch('/notifications', 'get', metadata);
  }

  /**
   * Remove Insight Tags
   *
   * @throws FetchError<400, types.RemoveInsightTagsResponse400> 400
   */
  removeInsightTags(body: types.RemoveInsightTagsBodyParam, metadata?: types.RemoveInsightTagsMetadataParam): Promise<FetchResponse<204, types.RemoveInsightTagsResponse204>> {
    return this.core.fetch('/insights/tags/remove', 'post', body, metadata);
  }

  /**
   * Add Location Tags
   *
   * @throws FetchError<400, types.AddLocationTagsResponse400> 400
   */
  addLocationTags(body: types.AddLocationTagsBodyParam, metadata?: types.AddLocationTagsMetadataParam): Promise<FetchResponse<204, types.AddLocationTagsResponse204>> {
    return this.core.fetch('/locations/tags/add', 'post', body, metadata);
  }

  /**
   * Add Insight Tags
   *
   * @throws FetchError<400, types.AddInsightTagsResponse400> 400
   */
  addInsightTags(body: types.AddInsightTagsBodyParam, metadata?: types.AddInsightTagsMetadataParam): Promise<FetchResponse<204, types.AddInsightTagsResponse204>> {
    return this.core.fetch('/insights/tags/add', 'post', body, metadata);
  }

  /**
   * On-Demand Events
   *
   * @throws FetchError<400, types.EventsTimelineResponse400> 400
   */
  eventsTimeline(body: types.EventsTimelineBodyParam): Promise<FetchResponse<200, types.EventsTimelineResponse200>> {
    return this.core.fetch('/events-timeline', 'post', body);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AddInsightTagsBodyParam, AddInsightTagsMetadataParam, AddInsightTagsResponse204, AddInsightTagsResponse400, AddLocationTagsBodyParam, AddLocationTagsMetadataParam, AddLocationTagsResponse204, AddLocationTagsResponse400, DeleteAlertsIdMetadataParam, DeleteAlertsIdResponse204, DeleteInsightsIdMetadataParam, DeleteInsightsIdResponse204, DeleteLocationsIdMetadataParam, DeleteLocationsIdResponse204, EventsTimelineBodyParam, EventsTimelineResponse200, EventsTimelineResponse400, GetAlertsIdMetadataParam, GetAlertsIdResponse200, GetAlertsMetadataParam, GetAlertsResponse200, GetEventsMetadataParam, GetEventsResponse200, GetInsightsIdMetadataParam, GetInsightsIdResponse200, GetInsightsMetadataParam, GetInsightsResponse200, GetLocationsIdMetadataParam, GetLocationsIdResponse200, GetLocationsMetadataParam, GetLocationsResponse200, ListNotificationsGetMetadataParam, ListNotificationsGetResponse200, PostAlertsBodyParam, PostAlertsIdActivateMetadataParam, PostAlertsIdActivateResponse204, PostAlertsIdDeactivateMetadataParam, PostAlertsIdDeactivateResponse204, PostAlertsIdLocationsLinkBodyParam, PostAlertsIdLocationsLinkMetadataParam, PostAlertsIdLocationsLinkResponse204, PostAlertsIdLocationsMetadataParam, PostAlertsIdLocationsResponse200, PostAlertsIdLocationsUnlinkBodyParam, PostAlertsIdLocationsUnlinkMetadataParam, PostAlertsIdLocationsUnlinkResponse204, PostAlertsMetadataParam, PostAlertsResponse200, PostEventsBodyParam, PostEventsMetadataParam, PostEventsResponse200, PostInsightsBodyParam, PostInsightsMetadataParam, PostInsightsResponse201, PostLocationsBodyParam, PostLocationsMetadataParam, PostLocationsResponse200, PutAlertsIdBodyParam, PutAlertsIdMetadataParam, PutAlertsIdResponse200, PutInsightsIdBodyParam, PutInsightsIdMetadataParam, PutInsightsIdResponse200, PutLocationIdBodyParam, PutLocationIdMetadataParam, PutLocationIdResponse200, RemoveInsightTagsBodyParam, RemoveInsightTagsMetadataParam, RemoveInsightTagsResponse204, RemoveInsightTagsResponse400, RemoveLocationTagsBodyParam, RemoveLocationTagsMetadataParam, RemoveLocationTagsResponse204, RemoveLocationTagsResponse400 } from './types';
