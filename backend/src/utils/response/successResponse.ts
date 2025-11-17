export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    timestamp: string;
  };
}

export function successResponse<T>(
  data: T,
  metadata?: Partial<SuccessResponse<T>['metadata']>
): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString(),
    },
  };
}

export function listResponse<T>(
  data: T[],
  page: number,
  pageSize: number,
  total: number
): SuccessResponse<T[]> {
  return {
    success: true,
    data,
    metadata: {
      page,
      pageSize,
      total,
      hasNext: page * pageSize < total,
      hasPrevious: page > 1,
      timestamp: new Date().toISOString(),
    },
  };
}
