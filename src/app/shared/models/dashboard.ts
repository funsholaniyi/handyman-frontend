export class DashBoardOverView {
    firmClientCount: number;
    firmLeadCount: number;
    firmMessageCount: number;
    firmUnCompletedApplicationCount: number;
    firmUnCompletedMatterCount: number;
    firmUnCompletedEndorsementCount: number;
    firmCompletedMatterCount: number;
    firmUserUnCompletedTaskCount: number;
    userUnCompletedTaskCount: number;
    userCompletedTaskCount: number;

/**
 *
 */
constructor() {
    this.firmClientCount = 3;
    this.firmLeadCount = 2;
    this.firmMessageCount = 5;
    this.firmUnCompletedApplicationCount = 2;
    this.firmUnCompletedEndorsementCount = 4;
    this.firmUnCompletedMatterCount = 5;
    this.firmUserUnCompletedTaskCount = 6;
    this.userCompletedTaskCount = 5;
    this.userUnCompletedTaskCount = 6;
    this.firmCompletedMatterCount = 6;
}

}
export class UserDashboardOverview {
    reports: number;
    requests: number;
    customers: number;
    walletBalance: number;
}

export const dashBoardOverViewSample = {
    firmClientCount: 12,
    firmLeadCount: 2,
    firmMessageCount: 20,
    firmUnCompletedApplicationCount: 4,
    firmUnCompletedMatterCount: 5,
    firmUnCompletedEndorsementCount: 11,
    firmCompletedMatterCount: 15,
    firmUserUnCompletedTaskCount: 3,
    userUnCompletedTaskCount: 12,
    userCompletedTaskCount: 2
};
export const userDashboardOverviewSample: UserDashboardOverview = {
  reports: 0,
  customers: 0,
  requests: 0,
  walletBalance: 153.23
};
