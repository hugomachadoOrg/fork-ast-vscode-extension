export const EXTENSION_NAME: string = "ast-results";
export const EXTENSION_FULL_NAME: string = "Checkmarx";
export const SCAN_ID_KEY: string = "ast-results-scan-id";
export const SCAN_CREATE_ID_KEY: string = "ast-results-scan-create-id";
export const SCAN_CREATE_PREP_KEY: string = "ast-results-scan-prep-id";

export const HIGH_FILTER: string = "ast-results-high";
export const MEDIUM_FILTER: string = "ast-results-medium";
export const LOW_FILTER: string = "ast-results-low";
export const INFO_FILTER: string = "ast-results-info";

export const NOT_EXPLOITABLE_FILTER: string = "ast-results-NotExploitable";
export const PROPOSED_FILTER: string = "ast-results-Proposed";
export const CONFIRMED_FILTER: string = "ast-results-Confirmed";
export const TO_VERIFY_FILTER: string = "ast-results-ToVerify";
export const URGENT_FILTER: string = "ast-results-Urgent";
export const NOT_IGNORED_FILTER: string = "ast-results-NotIgnored";
export const IGNORED_FILTER: string = "ast-results-Ignored";

export const QUERY_NAME_GROUP: string = "ast-results-groupByQueryName";
export const LANGUAGE_GROUP: string = "ast-results-groupByLanguage";
export const SEVERITY_GROUP: string = "ast-results-groupBySeverity";
export const STATUS_GROUP: string = "ast-results-groupByStatus";
export const STATE_GROUP: string = "ast-results-groupByState";
export const FILE_GROUP: string = "ast-results-groupByFile";
export const DEPENDENCY_GROUP: string = "ast-results-groupByDirectDependency";

export const PROJECT_ID_KEY: string = "ast-results-project-id";
export const ERROR: string = "ast-results-error";
export const ERROR_MESSAGE: string = "[CxERROR] ";
export const BRANCH_ID_KEY: string = "ast-results-branch-id";
export const BRANCH_NAME: string = "ast-results-branch-name";
export const BRANCH_TEMP_ID_KEY: string = "ast-results-temp-branch-id";

export const PROJECT_LABEL: string = "Project: ";
export const PROJECT_PLACEHOLDER: string = "Select project";
export const BRANCH_LABEL: string = "Branch: ";
export const BRANCH_PLACEHOLDER: string = "Select branch";
export const SCAN_LABEL: string = "Scan: ";
export const SCAN_PLACEHOLDER: string = "Select scan";
export const SCAN_PICKER_TITLE: string = "Checkmarx One Scan selection";

export const PROJECT_ITEM: string = "project-item";
export const BRANCH_ITEM: string = "branch-item";
export const SCAN_ITEM: string = "scan-item";
export const GRAPH_ITEM: string = "graph-item";
export const STATUS_ITEM: string = "status-item";
export const ERROR_ITEM: string = "error-item";


export const RESULTS_FILE_NAME: string = "ast-results";
export const RESULTS_FILE_EXTENSION: string = "json";

export const STATUS = [{class:"select-high",value:"HIGH"},{class:"select-medium",value:"MEDIUM"},{class:"select-low",value:"LOW"},{class:"select-info",value:"INFO"}];
export const STATE = [{tag:"NOT_EXPLOITABLE",value:"Not Exploitable"},{tag:"PROPOSED_NOT_EXPLOITABLE",value:"Proposed Not Exploitable"},{tag:"CONFIRMED",value:"Confirmed"},{tag:"TO_VERIFY",value:"To Verify"},{tag:"URGENT",value:"Urgent"},{tag:"NOT_IGNORED",value:"Not Ignored", dependency:true},{tag:"IGNORED",value:"Ignored", dependency:true}];

export const SAST: string = "sast";
export const KICS: string = "kics";
export const SCA: string = "sca";

export enum IssueFilter {
	fileName = "fileName",
	severity = "severity",
	status = "status",
	language = "language",
	state = "state",
	typeLabel = "typeLabel",
	queryName = "queryName",
	packageIdentifier = "scaNode.packageIdentifier",
	directDependency = "scaNode.scaPackageData.typeOfDependency",
	scaType = "scaType"
  }
  
export enum IssueLevel {
	high = "HIGH",
	medium = "MEDIUM",
	low = "LOW",
	info = "INFO",
	empty = "",
}

export enum StateLevel {
	urgent = "Urgent",
	toVerify = "ToVerify",
	confirmed = "Confirmed",
	proposed = "Proposed",
	notExploitable = "NotExploitable",
	notIgnored = "NotIgnored",
	ignored = "Ignored"
}

export const ERROR_REGEX = /Error: [0-9]{4}\/[0-9]{2}\/[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2} /i;

export const AST_ERROR_CODEBASHING_NO_LICENSE: number = 3;
export const AST_ERROR_CODEBASHING_NO_LESSON: number = 4;

export const KICS_REALTIME_FILE = "CURRENT_KICS_FILE";
export const PROCESS_OBJECT = "PROCESS_OBJECT";
export const PROCESS_OBJECT_KEY = "cli-process";

export const KICS_QUERIES = "queries";
export const KICS_RESULTS = "results";
export const KICS_TOTAL_COUNTER = "total_counter";
export const KICS_COUNT = "count";
export const KICS_RESULTS_FILE = "kics-results.json";

export const REFRESHING_TREE = "$(sync~spin) Refreshing tree";

// SCAN FROM IDE
export const SCAN_CREATE = "$(sync~spin) Scan initializing...";
export const SCAN_CREATE_VERIFY_BRANCH = "$(sync~spin) Checking matching branches";
export const SCAN_CREATE_VERIFY_FILES = "$(sync~spin) Checking matching files";
export const SCAN_CREATE_PREPARING = "$(sync~spin) Preparing files for scan";
export const SCAN_WAITING = "$(sync~spin) Scan running";
export const SCAN_CANCEL = "$(sync~spin) Canceling Scan";
export const SCAN_POLL_TIMEOUT = 15000; // MILLISECONDS

// SCA AUTO SCAN
export const SCA_NO_VULNERABILITIES = "Checkmarx found no vulnerabilities.";
export const SCA_START_SCAN = "Click the play button to scan with Checkmarx SCA";
export const CLEAR_SCA = "Clear all sca scan information";
export const SCA_SCAN_WAITING = "$(sync~spin) Checkmarx sca scan running";
export const SCA_SCAN_RUNNING_LOG = "SCA auto scanning command is running";

// USER INPUT BUTTONS
export const YES = "Yes";
export const NO = "No";

// SCAN STATUS
export const SCAN_STATUS_COMPLETE = "completed";
export const SCAN_STATUS_QUEUED = "queued";
export const SCAN_STATUS_PARTIAL = "partial";
export const SCAN_STATUS_RUNNING = "running";

// CREATE SCAN ADDITIONAL ARGUMENTS
export const SCAN_CREATE_ADDITIONAL_PARAMETERS = "--async --sast-incremental --resubmit";