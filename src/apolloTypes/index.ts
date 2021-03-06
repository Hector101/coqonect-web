// Mutation Types
export type TMutation = {
  client: TClientMutation;
};

export type TClientMutation = {
  editProfile: TMessage;
  changePassword: TMessage;
  addUserSkill: TMessage;
};

export type TMessage = {
  message: string;
};

// Query Types
export type TQuery = {
  client: TClientQuery;
  public: TPublicQuery;
  admin: TAdminQuery;
};

export type TClientQuery = {
  authenticatedUser: TAuthenticatedUser;
};

export type TPublicQuery = {
  skillCategories: TSkillCategory[],
};

export type TAdminQuery = {
  userSkills: TUserSkills[],
};

export type TAuthenticatedUser = {
  profile: TProfile;
  email: string;
  skills: TSkills[];
};

type TCountryCode = 'AF' | 'AL' | 'DZ' | 'AF' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' |
  'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' |
  'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' |
  'BF' | 'BI' | 'CV' | 'KH' | 'CM' | 'CA' | 'KY' | 'FK' | 'FO' | 'FJ' | 'CF' | 'TD' | 'CL' |
  'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CD' | 'CG' | 'CK' | 'CR' | 'HR' | 'CU' | 'CW' | 'CY' |
  'CZ' | 'CI' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'SZ' |
  'ET' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' |
  'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' |
  'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' |
  'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' |
  'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' |
  'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' |
  'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MP' |
  'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' |
  'PR' | 'QA' | 'MK' | 'RO' | 'RU' | 'RW' | 'RE' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' |
  'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' |
  'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SE' | 'CH' | 'SY' |
  'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' |
  'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'UM' | 'US' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' |
  'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW' | 'AX';

export type TProfile = {
  fullName: string;
  imageUrl: string | null;
  city: string;
  country: TCountryCode;
  bio: string | null;
};

export type TSkillCategory = {
  id: string;
  name: string;
  skills: TSkills[];
};

export type TSkills = {
  id: string;
  name: string;
  evidence: string;
  months: number;
  years: number;
  description: string;
  status: 'verified' | 'unverified' | 'pending';
};

export type TUserSkills = {
  id: string;
  name: string;
  status: 'pending' | 'verified' | 'unverified';
  description: string;
  evidence: string;
  accountId: string;
  profile: TProfile;
};
