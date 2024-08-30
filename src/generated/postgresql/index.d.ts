
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Recipient
 * 
 */
export type Recipient = $Result.DefaultSelection<Prisma.$RecipientPayload>
/**
 * Model ReceiveLogs
 * 
 */
export type ReceiveLogs = $Result.DefaultSelection<Prisma.$ReceiveLogsPayload>
/**
 * Model SentLog
 * 
 */
export type SentLog = $Result.DefaultSelection<Prisma.$SentLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LogType: {
  EMAIL_SENT: 'EMAIL_SENT',
  EMAIL_OPENED: 'EMAIL_OPENED',
  EMAIL_CLICKED: 'EMAIL_CLICKED',
  WHATSAPP_SENT: 'WHATSAPP_SENT',
  WHATSAPP_READ: 'WHATSAPP_READ'
};

export type LogType = (typeof LogType)[keyof typeof LogType]


export const SentType: {
  EMAIL: 'EMAIL',
  WHATSAPP: 'WHATSAPP'
};

export type SentType = (typeof SentType)[keyof typeof SentType]

}

export type LogType = $Enums.LogType

export const LogType: typeof $Enums.LogType

export type SentType = $Enums.SentType

export const SentType: typeof $Enums.SentType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.recipient`: Exposes CRUD operations for the **Recipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipients
    * const recipients = await prisma.recipient.findMany()
    * ```
    */
  get recipient(): Prisma.RecipientDelegate<ExtArgs>;

  /**
   * `prisma.receiveLogs`: Exposes CRUD operations for the **ReceiveLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceiveLogs
    * const receiveLogs = await prisma.receiveLogs.findMany()
    * ```
    */
  get receiveLogs(): Prisma.ReceiveLogsDelegate<ExtArgs>;

  /**
   * `prisma.sentLog`: Exposes CRUD operations for the **SentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentLogs
    * const sentLogs = await prisma.sentLog.findMany()
    * ```
    */
  get sentLog(): Prisma.SentLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campaign: 'Campaign',
    User: 'User',
    Recipient: 'Recipient',
    ReceiveLogs: 'ReceiveLogs',
    SentLog: 'SentLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "campaign" | "user" | "recipient" | "receiveLogs" | "sentLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Recipient: {
        payload: Prisma.$RecipientPayload<ExtArgs>
        fields: Prisma.RecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findFirst: {
            args: Prisma.RecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          findMany: {
            args: Prisma.RecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          create: {
            args: Prisma.RecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          createMany: {
            args: Prisma.RecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>[]
          }
          delete: {
            args: Prisma.RecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          update: {
            args: Prisma.RecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          deleteMany: {
            args: Prisma.RecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipientPayload>
          }
          aggregate: {
            args: Prisma.RecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipient>
          }
          groupBy: {
            args: Prisma.RecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipientCountAggregateOutputType> | number
          }
        }
      }
      ReceiveLogs: {
        payload: Prisma.$ReceiveLogsPayload<ExtArgs>
        fields: Prisma.ReceiveLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceiveLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceiveLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>
          }
          findFirst: {
            args: Prisma.ReceiveLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceiveLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>
          }
          findMany: {
            args: Prisma.ReceiveLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>[]
          }
          create: {
            args: Prisma.ReceiveLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>
          }
          createMany: {
            args: Prisma.ReceiveLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceiveLogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>[]
          }
          delete: {
            args: Prisma.ReceiveLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>
          }
          update: {
            args: Prisma.ReceiveLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>
          }
          deleteMany: {
            args: Prisma.ReceiveLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceiveLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReceiveLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceiveLogsPayload>
          }
          aggregate: {
            args: Prisma.ReceiveLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceiveLogs>
          }
          groupBy: {
            args: Prisma.ReceiveLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceiveLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceiveLogsCountArgs<ExtArgs>
            result: $Utils.Optional<ReceiveLogsCountAggregateOutputType> | number
          }
        }
      }
      SentLog: {
        payload: Prisma.$SentLogPayload<ExtArgs>
        fields: Prisma.SentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>
          }
          findFirst: {
            args: Prisma.SentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>
          }
          findMany: {
            args: Prisma.SentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>[]
          }
          create: {
            args: Prisma.SentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>
          }
          createMany: {
            args: Prisma.SentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>[]
          }
          delete: {
            args: Prisma.SentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>
          }
          update: {
            args: Prisma.SentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>
          }
          deleteMany: {
            args: Prisma.SentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentLogPayload>
          }
          aggregate: {
            args: Prisma.SentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentLog>
          }
          groupBy: {
            args: Prisma.SentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentLogCountArgs<ExtArgs>
            result: $Utils.Optional<SentLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    Recipient: number
    SentLog: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipient?: boolean | CampaignCountOutputTypeCountRecipientArgs
    SentLog?: boolean | CampaignCountOutputTypeCountSentLogArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountSentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Recipient: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipient?: boolean | UserCountOutputTypeCountRecipientArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
  }


  /**
   * Count Type RecipientCountOutputType
   */

  export type RecipientCountOutputType = {
    receiveLogs: number
  }

  export type RecipientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiveLogs?: boolean | RecipientCountOutputTypeCountReceiveLogsArgs
  }

  // Custom InputTypes
  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipientCountOutputType
     */
    select?: RecipientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipientCountOutputType without action
   */
  export type RecipientCountOutputTypeCountReceiveLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiveLogsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    id: number | null
  }

  export type CampaignSumAggregateOutputType = {
    id: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    id?: true
  }

  export type CampaignSumAggregateInputType = {
    id?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Recipient?: boolean | Campaign$RecipientArgs<ExtArgs>
    SentLog?: boolean | Campaign$SentLogArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipient?: boolean | Campaign$RecipientArgs<ExtArgs>
    SentLog?: boolean | Campaign$SentLogArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      Recipient: Prisma.$RecipientPayload<ExtArgs>[]
      SentLog: Prisma.$SentLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recipient<T extends Campaign$RecipientArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$RecipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany"> | Null>
    SentLog<T extends Campaign$SentLogArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$SentLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'Int'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign.Recipient
   */
  export type Campaign$RecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    cursor?: RecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Campaign.SentLog
   */
  export type Campaign$SentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    where?: SentLogWhereInput
    orderBy?: SentLogOrderByWithRelationInput | SentLogOrderByWithRelationInput[]
    cursor?: SentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentLogScalarFieldEnum | SentLogScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Recipient?: boolean | User$RecipientArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipient?: boolean | User$RecipientArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Recipient: Prisma.$RecipientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recipient<T extends User$RecipientArgs<ExtArgs> = {}>(args?: Subset<T, User$RecipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Recipient
   */
  export type User$RecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    cursor?: RecipientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Recipient
   */

  export type AggregateRecipient = {
    _count: RecipientCountAggregateOutputType | null
    _avg: RecipientAvgAggregateOutputType | null
    _sum: RecipientSumAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  export type RecipientAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    campaignId: number | null
  }

  export type RecipientSumAggregateOutputType = {
    id: number | null
    userId: number | null
    campaignId: number | null
  }

  export type RecipientMinAggregateOutputType = {
    id: number | null
    userId: number | null
    campaignId: number | null
  }

  export type RecipientMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    campaignId: number | null
  }

  export type RecipientCountAggregateOutputType = {
    id: number
    userId: number
    campaignId: number
    _all: number
  }


  export type RecipientAvgAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
  }

  export type RecipientSumAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
  }

  export type RecipientMinAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
  }

  export type RecipientMaxAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
  }

  export type RecipientCountAggregateInputType = {
    id?: true
    userId?: true
    campaignId?: true
    _all?: true
  }

  export type RecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipient to aggregate.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipients
    **/
    _count?: true | RecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipientMaxAggregateInputType
  }

  export type GetRecipientAggregateType<T extends RecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipient[P]>
      : GetScalarType<T[P], AggregateRecipient[P]>
  }




  export type RecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipientWhereInput
    orderBy?: RecipientOrderByWithAggregationInput | RecipientOrderByWithAggregationInput[]
    by: RecipientScalarFieldEnum[] | RecipientScalarFieldEnum
    having?: RecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipientCountAggregateInputType | true
    _avg?: RecipientAvgAggregateInputType
    _sum?: RecipientSumAggregateInputType
    _min?: RecipientMinAggregateInputType
    _max?: RecipientMaxAggregateInputType
  }

  export type RecipientGroupByOutputType = {
    id: number
    userId: number
    campaignId: number
    _count: RecipientCountAggregateOutputType | null
    _avg: RecipientAvgAggregateOutputType | null
    _sum: RecipientSumAggregateOutputType | null
    _min: RecipientMinAggregateOutputType | null
    _max: RecipientMaxAggregateOutputType | null
  }

  type GetRecipientGroupByPayload<T extends RecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipientGroupByOutputType[P]>
        }
      >
    >


  export type RecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    receiveLogs?: boolean | Recipient$receiveLogsArgs<ExtArgs>
    _count?: boolean | RecipientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    campaignId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipient"]>

  export type RecipientSelectScalar = {
    id?: boolean
    userId?: boolean
    campaignId?: boolean
  }

  export type RecipientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    receiveLogs?: boolean | Recipient$receiveLogsArgs<ExtArgs>
    _count?: boolean | RecipientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $RecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
      receiveLogs: Prisma.$ReceiveLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      campaignId: number
    }, ExtArgs["result"]["recipient"]>
    composites: {}
  }

  type RecipientGetPayload<S extends boolean | null | undefined | RecipientDefaultArgs> = $Result.GetResult<Prisma.$RecipientPayload, S>

  type RecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipientCountAggregateInputType | true
    }

  export interface RecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipient'], meta: { name: 'Recipient' } }
    /**
     * Find zero or one Recipient that matches the filter.
     * @param {RecipientFindUniqueArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipientFindUniqueArgs>(args: SelectSubset<T, RecipientFindUniqueArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recipient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecipientFindUniqueOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipientFindFirstArgs>(args?: SelectSubset<T, RecipientFindFirstArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindFirstOrThrowArgs} args - Arguments to find a Recipient
     * @example
     * // Get one Recipient
     * const recipient = await prisma.recipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipients
     * const recipients = await prisma.recipient.findMany()
     * 
     * // Get first 10 Recipients
     * const recipients = await prisma.recipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipientWithIdOnly = await prisma.recipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipientFindManyArgs>(args?: SelectSubset<T, RecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recipient.
     * @param {RecipientCreateArgs} args - Arguments to create a Recipient.
     * @example
     * // Create one Recipient
     * const Recipient = await prisma.recipient.create({
     *   data: {
     *     // ... data to create a Recipient
     *   }
     * })
     * 
     */
    create<T extends RecipientCreateArgs>(args: SelectSubset<T, RecipientCreateArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recipients.
     * @param {RecipientCreateManyArgs} args - Arguments to create many Recipients.
     * @example
     * // Create many Recipients
     * const recipient = await prisma.recipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipientCreateManyArgs>(args?: SelectSubset<T, RecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipients and returns the data saved in the database.
     * @param {RecipientCreateManyAndReturnArgs} args - Arguments to create many Recipients.
     * @example
     * // Create many Recipients
     * const recipient = await prisma.recipient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipients and only return the `id`
     * const recipientWithIdOnly = await prisma.recipient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recipient.
     * @param {RecipientDeleteArgs} args - Arguments to delete one Recipient.
     * @example
     * // Delete one Recipient
     * const Recipient = await prisma.recipient.delete({
     *   where: {
     *     // ... filter to delete one Recipient
     *   }
     * })
     * 
     */
    delete<T extends RecipientDeleteArgs>(args: SelectSubset<T, RecipientDeleteArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recipient.
     * @param {RecipientUpdateArgs} args - Arguments to update one Recipient.
     * @example
     * // Update one Recipient
     * const recipient = await prisma.recipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipientUpdateArgs>(args: SelectSubset<T, RecipientUpdateArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recipients.
     * @param {RecipientDeleteManyArgs} args - Arguments to filter Recipients to delete.
     * @example
     * // Delete a few Recipients
     * const { count } = await prisma.recipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipientDeleteManyArgs>(args?: SelectSubset<T, RecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipients
     * const recipient = await prisma.recipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipientUpdateManyArgs>(args: SelectSubset<T, RecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipient.
     * @param {RecipientUpsertArgs} args - Arguments to update or create a Recipient.
     * @example
     * // Update or create a Recipient
     * const recipient = await prisma.recipient.upsert({
     *   create: {
     *     // ... data to create a Recipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipient we want to update
     *   }
     * })
     */
    upsert<T extends RecipientUpsertArgs>(args: SelectSubset<T, RecipientUpsertArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientCountArgs} args - Arguments to filter Recipients to count.
     * @example
     * // Count the number of Recipients
     * const count = await prisma.recipient.count({
     *   where: {
     *     // ... the filter for the Recipients we want to count
     *   }
     * })
    **/
    count<T extends RecipientCountArgs>(
      args?: Subset<T, RecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipientAggregateArgs>(args: Subset<T, RecipientAggregateArgs>): Prisma.PrismaPromise<GetRecipientAggregateType<T>>

    /**
     * Group by Recipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipientGroupByArgs['orderBy'] }
        : { orderBy?: RecipientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipient model
   */
  readonly fields: RecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    receiveLogs<T extends Recipient$receiveLogsArgs<ExtArgs> = {}>(args?: Subset<T, Recipient$receiveLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipient model
   */ 
  interface RecipientFieldRefs {
    readonly id: FieldRef<"Recipient", 'Int'>
    readonly userId: FieldRef<"Recipient", 'Int'>
    readonly campaignId: FieldRef<"Recipient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recipient findUnique
   */
  export type RecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient findUniqueOrThrow
   */
  export type RecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient findFirst
   */
  export type RecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient findFirstOrThrow
   */
  export type RecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipient to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipients.
     */
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient findMany
   */
  export type RecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter, which Recipients to fetch.
     */
    where?: RecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipients to fetch.
     */
    orderBy?: RecipientOrderByWithRelationInput | RecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipients.
     */
    cursor?: RecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipients.
     */
    skip?: number
    distinct?: RecipientScalarFieldEnum | RecipientScalarFieldEnum[]
  }

  /**
   * Recipient create
   */
  export type RecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipient.
     */
    data: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
  }

  /**
   * Recipient createMany
   */
  export type RecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipient createManyAndReturn
   */
  export type RecipientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recipients.
     */
    data: RecipientCreateManyInput | RecipientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipient update
   */
  export type RecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipient.
     */
    data: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
    /**
     * Choose, which Recipient to update.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient updateMany
   */
  export type RecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipients.
     */
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyInput>
    /**
     * Filter which Recipients to update
     */
    where?: RecipientWhereInput
  }

  /**
   * Recipient upsert
   */
  export type RecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipient to update in case it exists.
     */
    where: RecipientWhereUniqueInput
    /**
     * In case the Recipient found by the `where` argument doesn't exist, create a new Recipient with this data.
     */
    create: XOR<RecipientCreateInput, RecipientUncheckedCreateInput>
    /**
     * In case the Recipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipientUpdateInput, RecipientUncheckedUpdateInput>
  }

  /**
   * Recipient delete
   */
  export type RecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
    /**
     * Filter which Recipient to delete.
     */
    where: RecipientWhereUniqueInput
  }

  /**
   * Recipient deleteMany
   */
  export type RecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipients to delete
     */
    where?: RecipientWhereInput
  }

  /**
   * Recipient.receiveLogs
   */
  export type Recipient$receiveLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    where?: ReceiveLogsWhereInput
    orderBy?: ReceiveLogsOrderByWithRelationInput | ReceiveLogsOrderByWithRelationInput[]
    cursor?: ReceiveLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceiveLogsScalarFieldEnum | ReceiveLogsScalarFieldEnum[]
  }

  /**
   * Recipient without action
   */
  export type RecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipient
     */
    select?: RecipientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipientInclude<ExtArgs> | null
  }


  /**
   * Model ReceiveLogs
   */

  export type AggregateReceiveLogs = {
    _count: ReceiveLogsCountAggregateOutputType | null
    _avg: ReceiveLogsAvgAggregateOutputType | null
    _sum: ReceiveLogsSumAggregateOutputType | null
    _min: ReceiveLogsMinAggregateOutputType | null
    _max: ReceiveLogsMaxAggregateOutputType | null
  }

  export type ReceiveLogsAvgAggregateOutputType = {
    id: number | null
    recipientId: number | null
  }

  export type ReceiveLogsSumAggregateOutputType = {
    id: number | null
    recipientId: number | null
  }

  export type ReceiveLogsMinAggregateOutputType = {
    id: number | null
    recipientId: number | null
    logType: $Enums.LogType | null
    createdAt: Date | null
  }

  export type ReceiveLogsMaxAggregateOutputType = {
    id: number | null
    recipientId: number | null
    logType: $Enums.LogType | null
    createdAt: Date | null
  }

  export type ReceiveLogsCountAggregateOutputType = {
    id: number
    recipientId: number
    logType: number
    createdAt: number
    _all: number
  }


  export type ReceiveLogsAvgAggregateInputType = {
    id?: true
    recipientId?: true
  }

  export type ReceiveLogsSumAggregateInputType = {
    id?: true
    recipientId?: true
  }

  export type ReceiveLogsMinAggregateInputType = {
    id?: true
    recipientId?: true
    logType?: true
    createdAt?: true
  }

  export type ReceiveLogsMaxAggregateInputType = {
    id?: true
    recipientId?: true
    logType?: true
    createdAt?: true
  }

  export type ReceiveLogsCountAggregateInputType = {
    id?: true
    recipientId?: true
    logType?: true
    createdAt?: true
    _all?: true
  }

  export type ReceiveLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiveLogs to aggregate.
     */
    where?: ReceiveLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiveLogs to fetch.
     */
    orderBy?: ReceiveLogsOrderByWithRelationInput | ReceiveLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceiveLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiveLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiveLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceiveLogs
    **/
    _count?: true | ReceiveLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceiveLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceiveLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceiveLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceiveLogsMaxAggregateInputType
  }

  export type GetReceiveLogsAggregateType<T extends ReceiveLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateReceiveLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceiveLogs[P]>
      : GetScalarType<T[P], AggregateReceiveLogs[P]>
  }




  export type ReceiveLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceiveLogsWhereInput
    orderBy?: ReceiveLogsOrderByWithAggregationInput | ReceiveLogsOrderByWithAggregationInput[]
    by: ReceiveLogsScalarFieldEnum[] | ReceiveLogsScalarFieldEnum
    having?: ReceiveLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceiveLogsCountAggregateInputType | true
    _avg?: ReceiveLogsAvgAggregateInputType
    _sum?: ReceiveLogsSumAggregateInputType
    _min?: ReceiveLogsMinAggregateInputType
    _max?: ReceiveLogsMaxAggregateInputType
  }

  export type ReceiveLogsGroupByOutputType = {
    id: number
    recipientId: number
    logType: $Enums.LogType
    createdAt: Date
    _count: ReceiveLogsCountAggregateOutputType | null
    _avg: ReceiveLogsAvgAggregateOutputType | null
    _sum: ReceiveLogsSumAggregateOutputType | null
    _min: ReceiveLogsMinAggregateOutputType | null
    _max: ReceiveLogsMaxAggregateOutputType | null
  }

  type GetReceiveLogsGroupByPayload<T extends ReceiveLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceiveLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceiveLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceiveLogsGroupByOutputType[P]>
            : GetScalarType<T[P], ReceiveLogsGroupByOutputType[P]>
        }
      >
    >


  export type ReceiveLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    logType?: boolean
    createdAt?: boolean
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiveLogs"]>

  export type ReceiveLogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientId?: boolean
    logType?: boolean
    createdAt?: boolean
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receiveLogs"]>

  export type ReceiveLogsSelectScalar = {
    id?: boolean
    recipientId?: boolean
    logType?: boolean
    createdAt?: boolean
  }

  export type ReceiveLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }
  export type ReceiveLogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipient?: boolean | RecipientDefaultArgs<ExtArgs>
  }

  export type $ReceiveLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceiveLogs"
    objects: {
      recipient: Prisma.$RecipientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      recipientId: number
      logType: $Enums.LogType
      createdAt: Date
    }, ExtArgs["result"]["receiveLogs"]>
    composites: {}
  }

  type ReceiveLogsGetPayload<S extends boolean | null | undefined | ReceiveLogsDefaultArgs> = $Result.GetResult<Prisma.$ReceiveLogsPayload, S>

  type ReceiveLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReceiveLogsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReceiveLogsCountAggregateInputType | true
    }

  export interface ReceiveLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceiveLogs'], meta: { name: 'ReceiveLogs' } }
    /**
     * Find zero or one ReceiveLogs that matches the filter.
     * @param {ReceiveLogsFindUniqueArgs} args - Arguments to find a ReceiveLogs
     * @example
     * // Get one ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceiveLogsFindUniqueArgs>(args: SelectSubset<T, ReceiveLogsFindUniqueArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReceiveLogs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReceiveLogsFindUniqueOrThrowArgs} args - Arguments to find a ReceiveLogs
     * @example
     * // Get one ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceiveLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceiveLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReceiveLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsFindFirstArgs} args - Arguments to find a ReceiveLogs
     * @example
     * // Get one ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceiveLogsFindFirstArgs>(args?: SelectSubset<T, ReceiveLogsFindFirstArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReceiveLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsFindFirstOrThrowArgs} args - Arguments to find a ReceiveLogs
     * @example
     * // Get one ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceiveLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceiveLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReceiveLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.findMany()
     * 
     * // Get first 10 ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receiveLogsWithIdOnly = await prisma.receiveLogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceiveLogsFindManyArgs>(args?: SelectSubset<T, ReceiveLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReceiveLogs.
     * @param {ReceiveLogsCreateArgs} args - Arguments to create a ReceiveLogs.
     * @example
     * // Create one ReceiveLogs
     * const ReceiveLogs = await prisma.receiveLogs.create({
     *   data: {
     *     // ... data to create a ReceiveLogs
     *   }
     * })
     * 
     */
    create<T extends ReceiveLogsCreateArgs>(args: SelectSubset<T, ReceiveLogsCreateArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReceiveLogs.
     * @param {ReceiveLogsCreateManyArgs} args - Arguments to create many ReceiveLogs.
     * @example
     * // Create many ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceiveLogsCreateManyArgs>(args?: SelectSubset<T, ReceiveLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceiveLogs and returns the data saved in the database.
     * @param {ReceiveLogsCreateManyAndReturnArgs} args - Arguments to create many ReceiveLogs.
     * @example
     * // Create many ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceiveLogs and only return the `id`
     * const receiveLogsWithIdOnly = await prisma.receiveLogs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceiveLogsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceiveLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReceiveLogs.
     * @param {ReceiveLogsDeleteArgs} args - Arguments to delete one ReceiveLogs.
     * @example
     * // Delete one ReceiveLogs
     * const ReceiveLogs = await prisma.receiveLogs.delete({
     *   where: {
     *     // ... filter to delete one ReceiveLogs
     *   }
     * })
     * 
     */
    delete<T extends ReceiveLogsDeleteArgs>(args: SelectSubset<T, ReceiveLogsDeleteArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReceiveLogs.
     * @param {ReceiveLogsUpdateArgs} args - Arguments to update one ReceiveLogs.
     * @example
     * // Update one ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceiveLogsUpdateArgs>(args: SelectSubset<T, ReceiveLogsUpdateArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReceiveLogs.
     * @param {ReceiveLogsDeleteManyArgs} args - Arguments to filter ReceiveLogs to delete.
     * @example
     * // Delete a few ReceiveLogs
     * const { count } = await prisma.receiveLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceiveLogsDeleteManyArgs>(args?: SelectSubset<T, ReceiveLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceiveLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceiveLogsUpdateManyArgs>(args: SelectSubset<T, ReceiveLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReceiveLogs.
     * @param {ReceiveLogsUpsertArgs} args - Arguments to update or create a ReceiveLogs.
     * @example
     * // Update or create a ReceiveLogs
     * const receiveLogs = await prisma.receiveLogs.upsert({
     *   create: {
     *     // ... data to create a ReceiveLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceiveLogs we want to update
     *   }
     * })
     */
    upsert<T extends ReceiveLogsUpsertArgs>(args: SelectSubset<T, ReceiveLogsUpsertArgs<ExtArgs>>): Prisma__ReceiveLogsClient<$Result.GetResult<Prisma.$ReceiveLogsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReceiveLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsCountArgs} args - Arguments to filter ReceiveLogs to count.
     * @example
     * // Count the number of ReceiveLogs
     * const count = await prisma.receiveLogs.count({
     *   where: {
     *     // ... the filter for the ReceiveLogs we want to count
     *   }
     * })
    **/
    count<T extends ReceiveLogsCountArgs>(
      args?: Subset<T, ReceiveLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceiveLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceiveLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReceiveLogsAggregateArgs>(args: Subset<T, ReceiveLogsAggregateArgs>): Prisma.PrismaPromise<GetReceiveLogsAggregateType<T>>

    /**
     * Group by ReceiveLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceiveLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReceiveLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceiveLogsGroupByArgs['orderBy'] }
        : { orderBy?: ReceiveLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReceiveLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiveLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceiveLogs model
   */
  readonly fields: ReceiveLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceiveLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceiveLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipient<T extends RecipientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipientDefaultArgs<ExtArgs>>): Prisma__RecipientClient<$Result.GetResult<Prisma.$RecipientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReceiveLogs model
   */ 
  interface ReceiveLogsFieldRefs {
    readonly id: FieldRef<"ReceiveLogs", 'Int'>
    readonly recipientId: FieldRef<"ReceiveLogs", 'Int'>
    readonly logType: FieldRef<"ReceiveLogs", 'LogType'>
    readonly createdAt: FieldRef<"ReceiveLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReceiveLogs findUnique
   */
  export type ReceiveLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * Filter, which ReceiveLogs to fetch.
     */
    where: ReceiveLogsWhereUniqueInput
  }

  /**
   * ReceiveLogs findUniqueOrThrow
   */
  export type ReceiveLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * Filter, which ReceiveLogs to fetch.
     */
    where: ReceiveLogsWhereUniqueInput
  }

  /**
   * ReceiveLogs findFirst
   */
  export type ReceiveLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * Filter, which ReceiveLogs to fetch.
     */
    where?: ReceiveLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiveLogs to fetch.
     */
    orderBy?: ReceiveLogsOrderByWithRelationInput | ReceiveLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiveLogs.
     */
    cursor?: ReceiveLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiveLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiveLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiveLogs.
     */
    distinct?: ReceiveLogsScalarFieldEnum | ReceiveLogsScalarFieldEnum[]
  }

  /**
   * ReceiveLogs findFirstOrThrow
   */
  export type ReceiveLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * Filter, which ReceiveLogs to fetch.
     */
    where?: ReceiveLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiveLogs to fetch.
     */
    orderBy?: ReceiveLogsOrderByWithRelationInput | ReceiveLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceiveLogs.
     */
    cursor?: ReceiveLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiveLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiveLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceiveLogs.
     */
    distinct?: ReceiveLogsScalarFieldEnum | ReceiveLogsScalarFieldEnum[]
  }

  /**
   * ReceiveLogs findMany
   */
  export type ReceiveLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * Filter, which ReceiveLogs to fetch.
     */
    where?: ReceiveLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceiveLogs to fetch.
     */
    orderBy?: ReceiveLogsOrderByWithRelationInput | ReceiveLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceiveLogs.
     */
    cursor?: ReceiveLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceiveLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceiveLogs.
     */
    skip?: number
    distinct?: ReceiveLogsScalarFieldEnum | ReceiveLogsScalarFieldEnum[]
  }

  /**
   * ReceiveLogs create
   */
  export type ReceiveLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceiveLogs.
     */
    data: XOR<ReceiveLogsCreateInput, ReceiveLogsUncheckedCreateInput>
  }

  /**
   * ReceiveLogs createMany
   */
  export type ReceiveLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceiveLogs.
     */
    data: ReceiveLogsCreateManyInput | ReceiveLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceiveLogs createManyAndReturn
   */
  export type ReceiveLogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReceiveLogs.
     */
    data: ReceiveLogsCreateManyInput | ReceiveLogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceiveLogs update
   */
  export type ReceiveLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceiveLogs.
     */
    data: XOR<ReceiveLogsUpdateInput, ReceiveLogsUncheckedUpdateInput>
    /**
     * Choose, which ReceiveLogs to update.
     */
    where: ReceiveLogsWhereUniqueInput
  }

  /**
   * ReceiveLogs updateMany
   */
  export type ReceiveLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceiveLogs.
     */
    data: XOR<ReceiveLogsUpdateManyMutationInput, ReceiveLogsUncheckedUpdateManyInput>
    /**
     * Filter which ReceiveLogs to update
     */
    where?: ReceiveLogsWhereInput
  }

  /**
   * ReceiveLogs upsert
   */
  export type ReceiveLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceiveLogs to update in case it exists.
     */
    where: ReceiveLogsWhereUniqueInput
    /**
     * In case the ReceiveLogs found by the `where` argument doesn't exist, create a new ReceiveLogs with this data.
     */
    create: XOR<ReceiveLogsCreateInput, ReceiveLogsUncheckedCreateInput>
    /**
     * In case the ReceiveLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceiveLogsUpdateInput, ReceiveLogsUncheckedUpdateInput>
  }

  /**
   * ReceiveLogs delete
   */
  export type ReceiveLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
    /**
     * Filter which ReceiveLogs to delete.
     */
    where: ReceiveLogsWhereUniqueInput
  }

  /**
   * ReceiveLogs deleteMany
   */
  export type ReceiveLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceiveLogs to delete
     */
    where?: ReceiveLogsWhereInput
  }

  /**
   * ReceiveLogs without action
   */
  export type ReceiveLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceiveLogs
     */
    select?: ReceiveLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceiveLogsInclude<ExtArgs> | null
  }


  /**
   * Model SentLog
   */

  export type AggregateSentLog = {
    _count: SentLogCountAggregateOutputType | null
    _avg: SentLogAvgAggregateOutputType | null
    _sum: SentLogSumAggregateOutputType | null
    _min: SentLogMinAggregateOutputType | null
    _max: SentLogMaxAggregateOutputType | null
  }

  export type SentLogAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type SentLogSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
  }

  export type SentLogMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    sentType: $Enums.SentType | null
    templateMessage: string | null
    createdAt: Date | null
  }

  export type SentLogMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    sentType: $Enums.SentType | null
    templateMessage: string | null
    createdAt: Date | null
  }

  export type SentLogCountAggregateOutputType = {
    id: number
    campaignId: number
    sentType: number
    templateMessage: number
    createdAt: number
    _all: number
  }


  export type SentLogAvgAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type SentLogSumAggregateInputType = {
    id?: true
    campaignId?: true
  }

  export type SentLogMinAggregateInputType = {
    id?: true
    campaignId?: true
    sentType?: true
    templateMessage?: true
    createdAt?: true
  }

  export type SentLogMaxAggregateInputType = {
    id?: true
    campaignId?: true
    sentType?: true
    templateMessage?: true
    createdAt?: true
  }

  export type SentLogCountAggregateInputType = {
    id?: true
    campaignId?: true
    sentType?: true
    templateMessage?: true
    createdAt?: true
    _all?: true
  }

  export type SentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentLog to aggregate.
     */
    where?: SentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentLogs to fetch.
     */
    orderBy?: SentLogOrderByWithRelationInput | SentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentLogs
    **/
    _count?: true | SentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentLogMaxAggregateInputType
  }

  export type GetSentLogAggregateType<T extends SentLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentLog[P]>
      : GetScalarType<T[P], AggregateSentLog[P]>
  }




  export type SentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentLogWhereInput
    orderBy?: SentLogOrderByWithAggregationInput | SentLogOrderByWithAggregationInput[]
    by: SentLogScalarFieldEnum[] | SentLogScalarFieldEnum
    having?: SentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentLogCountAggregateInputType | true
    _avg?: SentLogAvgAggregateInputType
    _sum?: SentLogSumAggregateInputType
    _min?: SentLogMinAggregateInputType
    _max?: SentLogMaxAggregateInputType
  }

  export type SentLogGroupByOutputType = {
    id: number
    campaignId: number
    sentType: $Enums.SentType
    templateMessage: string
    createdAt: Date
    _count: SentLogCountAggregateOutputType | null
    _avg: SentLogAvgAggregateOutputType | null
    _sum: SentLogSumAggregateOutputType | null
    _min: SentLogMinAggregateOutputType | null
    _max: SentLogMaxAggregateOutputType | null
  }

  type GetSentLogGroupByPayload<T extends SentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentLogGroupByOutputType[P]>
            : GetScalarType<T[P], SentLogGroupByOutputType[P]>
        }
      >
    >


  export type SentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    sentType?: boolean
    templateMessage?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentLog"]>

  export type SentLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    sentType?: boolean
    templateMessage?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentLog"]>

  export type SentLogSelectScalar = {
    id?: boolean
    campaignId?: boolean
    sentType?: boolean
    templateMessage?: boolean
    createdAt?: boolean
  }

  export type SentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type SentLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $SentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SentLog"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      sentType: $Enums.SentType
      templateMessage: string
      createdAt: Date
    }, ExtArgs["result"]["sentLog"]>
    composites: {}
  }

  type SentLogGetPayload<S extends boolean | null | undefined | SentLogDefaultArgs> = $Result.GetResult<Prisma.$SentLogPayload, S>

  type SentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SentLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SentLogCountAggregateInputType | true
    }

  export interface SentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentLog'], meta: { name: 'SentLog' } }
    /**
     * Find zero or one SentLog that matches the filter.
     * @param {SentLogFindUniqueArgs} args - Arguments to find a SentLog
     * @example
     * // Get one SentLog
     * const sentLog = await prisma.sentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentLogFindUniqueArgs>(args: SelectSubset<T, SentLogFindUniqueArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SentLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SentLogFindUniqueOrThrowArgs} args - Arguments to find a SentLog
     * @example
     * // Get one SentLog
     * const sentLog = await prisma.sentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogFindFirstArgs} args - Arguments to find a SentLog
     * @example
     * // Get one SentLog
     * const sentLog = await prisma.sentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentLogFindFirstArgs>(args?: SelectSubset<T, SentLogFindFirstArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogFindFirstOrThrowArgs} args - Arguments to find a SentLog
     * @example
     * // Get one SentLog
     * const sentLog = await prisma.sentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentLogs
     * const sentLogs = await prisma.sentLog.findMany()
     * 
     * // Get first 10 SentLogs
     * const sentLogs = await prisma.sentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentLogWithIdOnly = await prisma.sentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SentLogFindManyArgs>(args?: SelectSubset<T, SentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SentLog.
     * @param {SentLogCreateArgs} args - Arguments to create a SentLog.
     * @example
     * // Create one SentLog
     * const SentLog = await prisma.sentLog.create({
     *   data: {
     *     // ... data to create a SentLog
     *   }
     * })
     * 
     */
    create<T extends SentLogCreateArgs>(args: SelectSubset<T, SentLogCreateArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SentLogs.
     * @param {SentLogCreateManyArgs} args - Arguments to create many SentLogs.
     * @example
     * // Create many SentLogs
     * const sentLog = await prisma.sentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentLogCreateManyArgs>(args?: SelectSubset<T, SentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SentLogs and returns the data saved in the database.
     * @param {SentLogCreateManyAndReturnArgs} args - Arguments to create many SentLogs.
     * @example
     * // Create many SentLogs
     * const sentLog = await prisma.sentLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SentLogs and only return the `id`
     * const sentLogWithIdOnly = await prisma.sentLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SentLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SentLog.
     * @param {SentLogDeleteArgs} args - Arguments to delete one SentLog.
     * @example
     * // Delete one SentLog
     * const SentLog = await prisma.sentLog.delete({
     *   where: {
     *     // ... filter to delete one SentLog
     *   }
     * })
     * 
     */
    delete<T extends SentLogDeleteArgs>(args: SelectSubset<T, SentLogDeleteArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SentLog.
     * @param {SentLogUpdateArgs} args - Arguments to update one SentLog.
     * @example
     * // Update one SentLog
     * const sentLog = await prisma.sentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentLogUpdateArgs>(args: SelectSubset<T, SentLogUpdateArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SentLogs.
     * @param {SentLogDeleteManyArgs} args - Arguments to filter SentLogs to delete.
     * @example
     * // Delete a few SentLogs
     * const { count } = await prisma.sentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentLogDeleteManyArgs>(args?: SelectSubset<T, SentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentLogs
     * const sentLog = await prisma.sentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentLogUpdateManyArgs>(args: SelectSubset<T, SentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SentLog.
     * @param {SentLogUpsertArgs} args - Arguments to update or create a SentLog.
     * @example
     * // Update or create a SentLog
     * const sentLog = await prisma.sentLog.upsert({
     *   create: {
     *     // ... data to create a SentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentLog we want to update
     *   }
     * })
     */
    upsert<T extends SentLogUpsertArgs>(args: SelectSubset<T, SentLogUpsertArgs<ExtArgs>>): Prisma__SentLogClient<$Result.GetResult<Prisma.$SentLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogCountArgs} args - Arguments to filter SentLogs to count.
     * @example
     * // Count the number of SentLogs
     * const count = await prisma.sentLog.count({
     *   where: {
     *     // ... the filter for the SentLogs we want to count
     *   }
     * })
    **/
    count<T extends SentLogCountArgs>(
      args?: Subset<T, SentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SentLogAggregateArgs>(args: Subset<T, SentLogAggregateArgs>): Prisma.PrismaPromise<GetSentLogAggregateType<T>>

    /**
     * Group by SentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentLogGroupByArgs['orderBy'] }
        : { orderBy?: SentLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SentLog model
   */
  readonly fields: SentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SentLog model
   */ 
  interface SentLogFieldRefs {
    readonly id: FieldRef<"SentLog", 'Int'>
    readonly campaignId: FieldRef<"SentLog", 'Int'>
    readonly sentType: FieldRef<"SentLog", 'SentType'>
    readonly templateMessage: FieldRef<"SentLog", 'String'>
    readonly createdAt: FieldRef<"SentLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SentLog findUnique
   */
  export type SentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * Filter, which SentLog to fetch.
     */
    where: SentLogWhereUniqueInput
  }

  /**
   * SentLog findUniqueOrThrow
   */
  export type SentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * Filter, which SentLog to fetch.
     */
    where: SentLogWhereUniqueInput
  }

  /**
   * SentLog findFirst
   */
  export type SentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * Filter, which SentLog to fetch.
     */
    where?: SentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentLogs to fetch.
     */
    orderBy?: SentLogOrderByWithRelationInput | SentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentLogs.
     */
    cursor?: SentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentLogs.
     */
    distinct?: SentLogScalarFieldEnum | SentLogScalarFieldEnum[]
  }

  /**
   * SentLog findFirstOrThrow
   */
  export type SentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * Filter, which SentLog to fetch.
     */
    where?: SentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentLogs to fetch.
     */
    orderBy?: SentLogOrderByWithRelationInput | SentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentLogs.
     */
    cursor?: SentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentLogs.
     */
    distinct?: SentLogScalarFieldEnum | SentLogScalarFieldEnum[]
  }

  /**
   * SentLog findMany
   */
  export type SentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * Filter, which SentLogs to fetch.
     */
    where?: SentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentLogs to fetch.
     */
    orderBy?: SentLogOrderByWithRelationInput | SentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentLogs.
     */
    cursor?: SentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentLogs.
     */
    skip?: number
    distinct?: SentLogScalarFieldEnum | SentLogScalarFieldEnum[]
  }

  /**
   * SentLog create
   */
  export type SentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SentLog.
     */
    data: XOR<SentLogCreateInput, SentLogUncheckedCreateInput>
  }

  /**
   * SentLog createMany
   */
  export type SentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentLogs.
     */
    data: SentLogCreateManyInput | SentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SentLog createManyAndReturn
   */
  export type SentLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SentLogs.
     */
    data: SentLogCreateManyInput | SentLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentLog update
   */
  export type SentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SentLog.
     */
    data: XOR<SentLogUpdateInput, SentLogUncheckedUpdateInput>
    /**
     * Choose, which SentLog to update.
     */
    where: SentLogWhereUniqueInput
  }

  /**
   * SentLog updateMany
   */
  export type SentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentLogs.
     */
    data: XOR<SentLogUpdateManyMutationInput, SentLogUncheckedUpdateManyInput>
    /**
     * Filter which SentLogs to update
     */
    where?: SentLogWhereInput
  }

  /**
   * SentLog upsert
   */
  export type SentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SentLog to update in case it exists.
     */
    where: SentLogWhereUniqueInput
    /**
     * In case the SentLog found by the `where` argument doesn't exist, create a new SentLog with this data.
     */
    create: XOR<SentLogCreateInput, SentLogUncheckedCreateInput>
    /**
     * In case the SentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentLogUpdateInput, SentLogUncheckedUpdateInput>
  }

  /**
   * SentLog delete
   */
  export type SentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
    /**
     * Filter which SentLog to delete.
     */
    where: SentLogWhereUniqueInput
  }

  /**
   * SentLog deleteMany
   */
  export type SentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentLogs to delete
     */
    where?: SentLogWhereInput
  }

  /**
   * SentLog without action
   */
  export type SentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentLog
     */
    select?: SentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecipientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    campaignId: 'campaignId'
  };

  export type RecipientScalarFieldEnum = (typeof RecipientScalarFieldEnum)[keyof typeof RecipientScalarFieldEnum]


  export const ReceiveLogsScalarFieldEnum: {
    id: 'id',
    recipientId: 'recipientId',
    logType: 'logType',
    createdAt: 'createdAt'
  };

  export type ReceiveLogsScalarFieldEnum = (typeof ReceiveLogsScalarFieldEnum)[keyof typeof ReceiveLogsScalarFieldEnum]


  export const SentLogScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    sentType: 'sentType',
    templateMessage: 'templateMessage',
    createdAt: 'createdAt'
  };

  export type SentLogScalarFieldEnum = (typeof SentLogScalarFieldEnum)[keyof typeof SentLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LogType'
   */
  export type EnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType'>
    


  /**
   * Reference to a field of type 'LogType[]'
   */
  export type ListEnumLogTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LogType[]'>
    


  /**
   * Reference to a field of type 'SentType'
   */
  export type EnumSentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SentType'>
    


  /**
   * Reference to a field of type 'SentType[]'
   */
  export type ListEnumSentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: IntFilter<"Campaign"> | number
    name?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    Recipient?: RecipientListRelationFilter
    SentLog?: SentLogListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Recipient?: RecipientOrderByRelationAggregateInput
    SentLog?: SentLogOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    Recipient?: RecipientListRelationFilter
    SentLog?: SentLogListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campaign"> | number
    name?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Recipient?: RecipientListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Recipient?: RecipientOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Recipient?: RecipientListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RecipientWhereInput = {
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    id?: IntFilter<"Recipient"> | number
    userId?: IntFilter<"Recipient"> | number
    campaignId?: IntFilter<"Recipient"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
    receiveLogs?: ReceiveLogsListRelationFilter
  }

  export type RecipientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    user?: UserOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    receiveLogs?: ReceiveLogsOrderByRelationAggregateInput
  }

  export type RecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipientWhereInput | RecipientWhereInput[]
    OR?: RecipientWhereInput[]
    NOT?: RecipientWhereInput | RecipientWhereInput[]
    userId?: IntFilter<"Recipient"> | number
    campaignId?: IntFilter<"Recipient"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
    receiveLogs?: ReceiveLogsListRelationFilter
  }, "id">

  export type RecipientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
    _count?: RecipientCountOrderByAggregateInput
    _avg?: RecipientAvgOrderByAggregateInput
    _max?: RecipientMaxOrderByAggregateInput
    _min?: RecipientMinOrderByAggregateInput
    _sum?: RecipientSumOrderByAggregateInput
  }

  export type RecipientScalarWhereWithAggregatesInput = {
    AND?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    OR?: RecipientScalarWhereWithAggregatesInput[]
    NOT?: RecipientScalarWhereWithAggregatesInput | RecipientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipient"> | number
    userId?: IntWithAggregatesFilter<"Recipient"> | number
    campaignId?: IntWithAggregatesFilter<"Recipient"> | number
  }

  export type ReceiveLogsWhereInput = {
    AND?: ReceiveLogsWhereInput | ReceiveLogsWhereInput[]
    OR?: ReceiveLogsWhereInput[]
    NOT?: ReceiveLogsWhereInput | ReceiveLogsWhereInput[]
    id?: IntFilter<"ReceiveLogs"> | number
    recipientId?: IntFilter<"ReceiveLogs"> | number
    logType?: EnumLogTypeFilter<"ReceiveLogs"> | $Enums.LogType
    createdAt?: DateTimeFilter<"ReceiveLogs"> | Date | string
    recipient?: XOR<RecipientRelationFilter, RecipientWhereInput>
  }

  export type ReceiveLogsOrderByWithRelationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    logType?: SortOrder
    createdAt?: SortOrder
    recipient?: RecipientOrderByWithRelationInput
  }

  export type ReceiveLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceiveLogsWhereInput | ReceiveLogsWhereInput[]
    OR?: ReceiveLogsWhereInput[]
    NOT?: ReceiveLogsWhereInput | ReceiveLogsWhereInput[]
    recipientId?: IntFilter<"ReceiveLogs"> | number
    logType?: EnumLogTypeFilter<"ReceiveLogs"> | $Enums.LogType
    createdAt?: DateTimeFilter<"ReceiveLogs"> | Date | string
    recipient?: XOR<RecipientRelationFilter, RecipientWhereInput>
  }, "id">

  export type ReceiveLogsOrderByWithAggregationInput = {
    id?: SortOrder
    recipientId?: SortOrder
    logType?: SortOrder
    createdAt?: SortOrder
    _count?: ReceiveLogsCountOrderByAggregateInput
    _avg?: ReceiveLogsAvgOrderByAggregateInput
    _max?: ReceiveLogsMaxOrderByAggregateInput
    _min?: ReceiveLogsMinOrderByAggregateInput
    _sum?: ReceiveLogsSumOrderByAggregateInput
  }

  export type ReceiveLogsScalarWhereWithAggregatesInput = {
    AND?: ReceiveLogsScalarWhereWithAggregatesInput | ReceiveLogsScalarWhereWithAggregatesInput[]
    OR?: ReceiveLogsScalarWhereWithAggregatesInput[]
    NOT?: ReceiveLogsScalarWhereWithAggregatesInput | ReceiveLogsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReceiveLogs"> | number
    recipientId?: IntWithAggregatesFilter<"ReceiveLogs"> | number
    logType?: EnumLogTypeWithAggregatesFilter<"ReceiveLogs"> | $Enums.LogType
    createdAt?: DateTimeWithAggregatesFilter<"ReceiveLogs"> | Date | string
  }

  export type SentLogWhereInput = {
    AND?: SentLogWhereInput | SentLogWhereInput[]
    OR?: SentLogWhereInput[]
    NOT?: SentLogWhereInput | SentLogWhereInput[]
    id?: IntFilter<"SentLog"> | number
    campaignId?: IntFilter<"SentLog"> | number
    sentType?: EnumSentTypeFilter<"SentLog"> | $Enums.SentType
    templateMessage?: StringFilter<"SentLog"> | string
    createdAt?: DateTimeFilter<"SentLog"> | Date | string
    campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
  }

  export type SentLogOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    sentType?: SortOrder
    templateMessage?: SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
  }

  export type SentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SentLogWhereInput | SentLogWhereInput[]
    OR?: SentLogWhereInput[]
    NOT?: SentLogWhereInput | SentLogWhereInput[]
    campaignId?: IntFilter<"SentLog"> | number
    sentType?: EnumSentTypeFilter<"SentLog"> | $Enums.SentType
    templateMessage?: StringFilter<"SentLog"> | string
    createdAt?: DateTimeFilter<"SentLog"> | Date | string
    campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>
  }, "id">

  export type SentLogOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    sentType?: SortOrder
    templateMessage?: SortOrder
    createdAt?: SortOrder
    _count?: SentLogCountOrderByAggregateInput
    _avg?: SentLogAvgOrderByAggregateInput
    _max?: SentLogMaxOrderByAggregateInput
    _min?: SentLogMinOrderByAggregateInput
    _sum?: SentLogSumOrderByAggregateInput
  }

  export type SentLogScalarWhereWithAggregatesInput = {
    AND?: SentLogScalarWhereWithAggregatesInput | SentLogScalarWhereWithAggregatesInput[]
    OR?: SentLogScalarWhereWithAggregatesInput[]
    NOT?: SentLogScalarWhereWithAggregatesInput | SentLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SentLog"> | number
    campaignId?: IntWithAggregatesFilter<"SentLog"> | number
    sentType?: EnumSentTypeWithAggregatesFilter<"SentLog"> | $Enums.SentType
    templateMessage?: StringWithAggregatesFilter<"SentLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SentLog"> | Date | string
  }

  export type CampaignCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Recipient?: RecipientCreateNestedManyWithoutCampaignInput
    SentLog?: SentLogCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Recipient?: RecipientUncheckedCreateNestedManyWithoutCampaignInput
    SentLog?: SentLogUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipient?: RecipientUpdateManyWithoutCampaignNestedInput
    SentLog?: SentLogUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipient?: RecipientUncheckedUpdateManyWithoutCampaignNestedInput
    SentLog?: SentLogUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Recipient?: RecipientCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Recipient?: RecipientUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipient?: RecipientUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipient?: RecipientUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientCreateInput = {
    user: UserCreateNestedOneWithoutRecipientInput
    campaign: CampaignCreateNestedOneWithoutRecipientInput
    receiveLogs?: ReceiveLogsCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateInput = {
    id?: number
    userId: number
    campaignId: number
    receiveLogs?: ReceiveLogsUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRecipientNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutRecipientNestedInput
    receiveLogs?: ReceiveLogsUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    receiveLogs?: ReceiveLogsUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientCreateManyInput = {
    id?: number
    userId: number
    campaignId: number
  }

  export type RecipientUpdateManyMutationInput = {

  }

  export type RecipientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceiveLogsCreateInput = {
    logType: $Enums.LogType
    createdAt?: Date | string
    recipient: RecipientCreateNestedOneWithoutReceiveLogsInput
  }

  export type ReceiveLogsUncheckedCreateInput = {
    id?: number
    recipientId: number
    logType: $Enums.LogType
    createdAt?: Date | string
  }

  export type ReceiveLogsUpdateInput = {
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: RecipientUpdateOneRequiredWithoutReceiveLogsNestedInput
  }

  export type ReceiveLogsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiveLogsCreateManyInput = {
    id?: number
    recipientId: number
    logType: $Enums.LogType
    createdAt?: Date | string
  }

  export type ReceiveLogsUpdateManyMutationInput = {
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiveLogsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentLogCreateInput = {
    sentType: $Enums.SentType
    templateMessage: string
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutSentLogInput
  }

  export type SentLogUncheckedCreateInput = {
    id?: number
    campaignId: number
    sentType: $Enums.SentType
    templateMessage: string
    createdAt?: Date | string
  }

  export type SentLogUpdateInput = {
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutSentLogNestedInput
  }

  export type SentLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentLogCreateManyInput = {
    id?: number
    campaignId: number
    sentType: $Enums.SentType
    templateMessage: string
    createdAt?: Date | string
  }

  export type SentLogUpdateManyMutationInput = {
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecipientListRelationFilter = {
    every?: RecipientWhereInput
    some?: RecipientWhereInput
    none?: RecipientWhereInput
  }

  export type SentLogListRelationFilter = {
    every?: SentLogWhereInput
    some?: SentLogWhereInput
    none?: SentLogWhereInput
  }

  export type RecipientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CampaignRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type ReceiveLogsListRelationFilter = {
    every?: ReceiveLogsWhereInput
    some?: ReceiveLogsWhereInput
    none?: ReceiveLogsWhereInput
  }

  export type ReceiveLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type RecipientAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type RecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type RecipientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type RecipientSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type RecipientRelationFilter = {
    is?: RecipientWhereInput
    isNot?: RecipientWhereInput
  }

  export type ReceiveLogsCountOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    logType?: SortOrder
    createdAt?: SortOrder
  }

  export type ReceiveLogsAvgOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
  }

  export type ReceiveLogsMaxOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    logType?: SortOrder
    createdAt?: SortOrder
  }

  export type ReceiveLogsMinOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
    logType?: SortOrder
    createdAt?: SortOrder
  }

  export type ReceiveLogsSumOrderByAggregateInput = {
    id?: SortOrder
    recipientId?: SortOrder
  }

  export type EnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type EnumSentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SentType | EnumSentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSentTypeFilter<$PrismaModel> | $Enums.SentType
  }

  export type SentLogCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    sentType?: SortOrder
    templateMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type SentLogAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type SentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    sentType?: SortOrder
    templateMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type SentLogMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    sentType?: SortOrder
    templateMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type SentLogSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
  }

  export type EnumSentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentType | EnumSentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSentTypeWithAggregatesFilter<$PrismaModel> | $Enums.SentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentTypeFilter<$PrismaModel>
    _max?: NestedEnumSentTypeFilter<$PrismaModel>
  }

  export type RecipientCreateNestedManyWithoutCampaignInput = {
    create?: XOR<RecipientCreateWithoutCampaignInput, RecipientUncheckedCreateWithoutCampaignInput> | RecipientCreateWithoutCampaignInput[] | RecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCampaignInput | RecipientCreateOrConnectWithoutCampaignInput[]
    createMany?: RecipientCreateManyCampaignInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type SentLogCreateNestedManyWithoutCampaignInput = {
    create?: XOR<SentLogCreateWithoutCampaignInput, SentLogUncheckedCreateWithoutCampaignInput> | SentLogCreateWithoutCampaignInput[] | SentLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: SentLogCreateOrConnectWithoutCampaignInput | SentLogCreateOrConnectWithoutCampaignInput[]
    createMany?: SentLogCreateManyCampaignInputEnvelope
    connect?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
  }

  export type RecipientUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<RecipientCreateWithoutCampaignInput, RecipientUncheckedCreateWithoutCampaignInput> | RecipientCreateWithoutCampaignInput[] | RecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCampaignInput | RecipientCreateOrConnectWithoutCampaignInput[]
    createMany?: RecipientCreateManyCampaignInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type SentLogUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<SentLogCreateWithoutCampaignInput, SentLogUncheckedCreateWithoutCampaignInput> | SentLogCreateWithoutCampaignInput[] | SentLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: SentLogCreateOrConnectWithoutCampaignInput | SentLogCreateOrConnectWithoutCampaignInput[]
    createMany?: SentLogCreateManyCampaignInputEnvelope
    connect?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecipientUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<RecipientCreateWithoutCampaignInput, RecipientUncheckedCreateWithoutCampaignInput> | RecipientCreateWithoutCampaignInput[] | RecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCampaignInput | RecipientCreateOrConnectWithoutCampaignInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutCampaignInput | RecipientUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: RecipientCreateManyCampaignInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutCampaignInput | RecipientUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutCampaignInput | RecipientUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type SentLogUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<SentLogCreateWithoutCampaignInput, SentLogUncheckedCreateWithoutCampaignInput> | SentLogCreateWithoutCampaignInput[] | SentLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: SentLogCreateOrConnectWithoutCampaignInput | SentLogCreateOrConnectWithoutCampaignInput[]
    upsert?: SentLogUpsertWithWhereUniqueWithoutCampaignInput | SentLogUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: SentLogCreateManyCampaignInputEnvelope
    set?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    disconnect?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    delete?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    connect?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    update?: SentLogUpdateWithWhereUniqueWithoutCampaignInput | SentLogUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: SentLogUpdateManyWithWhereWithoutCampaignInput | SentLogUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: SentLogScalarWhereInput | SentLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipientUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<RecipientCreateWithoutCampaignInput, RecipientUncheckedCreateWithoutCampaignInput> | RecipientCreateWithoutCampaignInput[] | RecipientUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutCampaignInput | RecipientCreateOrConnectWithoutCampaignInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutCampaignInput | RecipientUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: RecipientCreateManyCampaignInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutCampaignInput | RecipientUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutCampaignInput | RecipientUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type SentLogUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<SentLogCreateWithoutCampaignInput, SentLogUncheckedCreateWithoutCampaignInput> | SentLogCreateWithoutCampaignInput[] | SentLogUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: SentLogCreateOrConnectWithoutCampaignInput | SentLogCreateOrConnectWithoutCampaignInput[]
    upsert?: SentLogUpsertWithWhereUniqueWithoutCampaignInput | SentLogUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: SentLogCreateManyCampaignInputEnvelope
    set?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    disconnect?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    delete?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    connect?: SentLogWhereUniqueInput | SentLogWhereUniqueInput[]
    update?: SentLogUpdateWithWhereUniqueWithoutCampaignInput | SentLogUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: SentLogUpdateManyWithWhereWithoutCampaignInput | SentLogUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: SentLogScalarWhereInput | SentLogScalarWhereInput[]
  }

  export type RecipientCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipientCreateWithoutUserInput, RecipientUncheckedCreateWithoutUserInput> | RecipientCreateWithoutUserInput[] | RecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutUserInput | RecipientCreateOrConnectWithoutUserInput[]
    createMany?: RecipientCreateManyUserInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type RecipientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipientCreateWithoutUserInput, RecipientUncheckedCreateWithoutUserInput> | RecipientCreateWithoutUserInput[] | RecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutUserInput | RecipientCreateOrConnectWithoutUserInput[]
    createMany?: RecipientCreateManyUserInputEnvelope
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecipientUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipientCreateWithoutUserInput, RecipientUncheckedCreateWithoutUserInput> | RecipientCreateWithoutUserInput[] | RecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutUserInput | RecipientCreateOrConnectWithoutUserInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutUserInput | RecipientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipientCreateManyUserInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutUserInput | RecipientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutUserInput | RecipientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type RecipientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipientCreateWithoutUserInput, RecipientUncheckedCreateWithoutUserInput> | RecipientCreateWithoutUserInput[] | RecipientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipientCreateOrConnectWithoutUserInput | RecipientCreateOrConnectWithoutUserInput[]
    upsert?: RecipientUpsertWithWhereUniqueWithoutUserInput | RecipientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipientCreateManyUserInputEnvelope
    set?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    disconnect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    delete?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    connect?: RecipientWhereUniqueInput | RecipientWhereUniqueInput[]
    update?: RecipientUpdateWithWhereUniqueWithoutUserInput | RecipientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipientUpdateManyWithWhereWithoutUserInput | RecipientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecipientInput = {
    create?: XOR<UserCreateWithoutRecipientInput, UserUncheckedCreateWithoutRecipientInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipientInput
    connect?: UserWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutRecipientInput = {
    create?: XOR<CampaignCreateWithoutRecipientInput, CampaignUncheckedCreateWithoutRecipientInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRecipientInput
    connect?: CampaignWhereUniqueInput
  }

  export type ReceiveLogsCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ReceiveLogsCreateWithoutRecipientInput, ReceiveLogsUncheckedCreateWithoutRecipientInput> | ReceiveLogsCreateWithoutRecipientInput[] | ReceiveLogsUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReceiveLogsCreateOrConnectWithoutRecipientInput | ReceiveLogsCreateOrConnectWithoutRecipientInput[]
    createMany?: ReceiveLogsCreateManyRecipientInputEnvelope
    connect?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
  }

  export type ReceiveLogsUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ReceiveLogsCreateWithoutRecipientInput, ReceiveLogsUncheckedCreateWithoutRecipientInput> | ReceiveLogsCreateWithoutRecipientInput[] | ReceiveLogsUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReceiveLogsCreateOrConnectWithoutRecipientInput | ReceiveLogsCreateOrConnectWithoutRecipientInput[]
    createMany?: ReceiveLogsCreateManyRecipientInputEnvelope
    connect?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRecipientNestedInput = {
    create?: XOR<UserCreateWithoutRecipientInput, UserUncheckedCreateWithoutRecipientInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipientInput
    upsert?: UserUpsertWithoutRecipientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipientInput, UserUpdateWithoutRecipientInput>, UserUncheckedUpdateWithoutRecipientInput>
  }

  export type CampaignUpdateOneRequiredWithoutRecipientNestedInput = {
    create?: XOR<CampaignCreateWithoutRecipientInput, CampaignUncheckedCreateWithoutRecipientInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutRecipientInput
    upsert?: CampaignUpsertWithoutRecipientInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutRecipientInput, CampaignUpdateWithoutRecipientInput>, CampaignUncheckedUpdateWithoutRecipientInput>
  }

  export type ReceiveLogsUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ReceiveLogsCreateWithoutRecipientInput, ReceiveLogsUncheckedCreateWithoutRecipientInput> | ReceiveLogsCreateWithoutRecipientInput[] | ReceiveLogsUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReceiveLogsCreateOrConnectWithoutRecipientInput | ReceiveLogsCreateOrConnectWithoutRecipientInput[]
    upsert?: ReceiveLogsUpsertWithWhereUniqueWithoutRecipientInput | ReceiveLogsUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ReceiveLogsCreateManyRecipientInputEnvelope
    set?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    disconnect?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    delete?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    connect?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    update?: ReceiveLogsUpdateWithWhereUniqueWithoutRecipientInput | ReceiveLogsUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ReceiveLogsUpdateManyWithWhereWithoutRecipientInput | ReceiveLogsUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ReceiveLogsScalarWhereInput | ReceiveLogsScalarWhereInput[]
  }

  export type ReceiveLogsUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ReceiveLogsCreateWithoutRecipientInput, ReceiveLogsUncheckedCreateWithoutRecipientInput> | ReceiveLogsCreateWithoutRecipientInput[] | ReceiveLogsUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReceiveLogsCreateOrConnectWithoutRecipientInput | ReceiveLogsCreateOrConnectWithoutRecipientInput[]
    upsert?: ReceiveLogsUpsertWithWhereUniqueWithoutRecipientInput | ReceiveLogsUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ReceiveLogsCreateManyRecipientInputEnvelope
    set?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    disconnect?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    delete?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    connect?: ReceiveLogsWhereUniqueInput | ReceiveLogsWhereUniqueInput[]
    update?: ReceiveLogsUpdateWithWhereUniqueWithoutRecipientInput | ReceiveLogsUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ReceiveLogsUpdateManyWithWhereWithoutRecipientInput | ReceiveLogsUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ReceiveLogsScalarWhereInput | ReceiveLogsScalarWhereInput[]
  }

  export type RecipientCreateNestedOneWithoutReceiveLogsInput = {
    create?: XOR<RecipientCreateWithoutReceiveLogsInput, RecipientUncheckedCreateWithoutReceiveLogsInput>
    connectOrCreate?: RecipientCreateOrConnectWithoutReceiveLogsInput
    connect?: RecipientWhereUniqueInput
  }

  export type EnumLogTypeFieldUpdateOperationsInput = {
    set?: $Enums.LogType
  }

  export type RecipientUpdateOneRequiredWithoutReceiveLogsNestedInput = {
    create?: XOR<RecipientCreateWithoutReceiveLogsInput, RecipientUncheckedCreateWithoutReceiveLogsInput>
    connectOrCreate?: RecipientCreateOrConnectWithoutReceiveLogsInput
    upsert?: RecipientUpsertWithoutReceiveLogsInput
    connect?: RecipientWhereUniqueInput
    update?: XOR<XOR<RecipientUpdateToOneWithWhereWithoutReceiveLogsInput, RecipientUpdateWithoutReceiveLogsInput>, RecipientUncheckedUpdateWithoutReceiveLogsInput>
  }

  export type CampaignCreateNestedOneWithoutSentLogInput = {
    create?: XOR<CampaignCreateWithoutSentLogInput, CampaignUncheckedCreateWithoutSentLogInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutSentLogInput
    connect?: CampaignWhereUniqueInput
  }

  export type EnumSentTypeFieldUpdateOperationsInput = {
    set?: $Enums.SentType
  }

  export type CampaignUpdateOneRequiredWithoutSentLogNestedInput = {
    create?: XOR<CampaignCreateWithoutSentLogInput, CampaignUncheckedCreateWithoutSentLogInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutSentLogInput
    upsert?: CampaignUpsertWithoutSentLogInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutSentLogInput, CampaignUpdateWithoutSentLogInput>, CampaignUncheckedUpdateWithoutSentLogInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLogTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeFilter<$PrismaModel> | $Enums.LogType
  }

  export type NestedEnumLogTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LogType | EnumLogTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LogType[] | ListEnumLogTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLogTypeWithAggregatesFilter<$PrismaModel> | $Enums.LogType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLogTypeFilter<$PrismaModel>
    _max?: NestedEnumLogTypeFilter<$PrismaModel>
  }

  export type NestedEnumSentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SentType | EnumSentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSentTypeFilter<$PrismaModel> | $Enums.SentType
  }

  export type NestedEnumSentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SentType | EnumSentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SentType[] | ListEnumSentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSentTypeWithAggregatesFilter<$PrismaModel> | $Enums.SentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSentTypeFilter<$PrismaModel>
    _max?: NestedEnumSentTypeFilter<$PrismaModel>
  }

  export type RecipientCreateWithoutCampaignInput = {
    user: UserCreateNestedOneWithoutRecipientInput
    receiveLogs?: ReceiveLogsCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutCampaignInput = {
    id?: number
    userId: number
    receiveLogs?: ReceiveLogsUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientCreateOrConnectWithoutCampaignInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutCampaignInput, RecipientUncheckedCreateWithoutCampaignInput>
  }

  export type RecipientCreateManyCampaignInputEnvelope = {
    data: RecipientCreateManyCampaignInput | RecipientCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type SentLogCreateWithoutCampaignInput = {
    sentType: $Enums.SentType
    templateMessage: string
    createdAt?: Date | string
  }

  export type SentLogUncheckedCreateWithoutCampaignInput = {
    id?: number
    sentType: $Enums.SentType
    templateMessage: string
    createdAt?: Date | string
  }

  export type SentLogCreateOrConnectWithoutCampaignInput = {
    where: SentLogWhereUniqueInput
    create: XOR<SentLogCreateWithoutCampaignInput, SentLogUncheckedCreateWithoutCampaignInput>
  }

  export type SentLogCreateManyCampaignInputEnvelope = {
    data: SentLogCreateManyCampaignInput | SentLogCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type RecipientUpsertWithWhereUniqueWithoutCampaignInput = {
    where: RecipientWhereUniqueInput
    update: XOR<RecipientUpdateWithoutCampaignInput, RecipientUncheckedUpdateWithoutCampaignInput>
    create: XOR<RecipientCreateWithoutCampaignInput, RecipientUncheckedCreateWithoutCampaignInput>
  }

  export type RecipientUpdateWithWhereUniqueWithoutCampaignInput = {
    where: RecipientWhereUniqueInput
    data: XOR<RecipientUpdateWithoutCampaignInput, RecipientUncheckedUpdateWithoutCampaignInput>
  }

  export type RecipientUpdateManyWithWhereWithoutCampaignInput = {
    where: RecipientScalarWhereInput
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyWithoutCampaignInput>
  }

  export type RecipientScalarWhereInput = {
    AND?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    OR?: RecipientScalarWhereInput[]
    NOT?: RecipientScalarWhereInput | RecipientScalarWhereInput[]
    id?: IntFilter<"Recipient"> | number
    userId?: IntFilter<"Recipient"> | number
    campaignId?: IntFilter<"Recipient"> | number
  }

  export type SentLogUpsertWithWhereUniqueWithoutCampaignInput = {
    where: SentLogWhereUniqueInput
    update: XOR<SentLogUpdateWithoutCampaignInput, SentLogUncheckedUpdateWithoutCampaignInput>
    create: XOR<SentLogCreateWithoutCampaignInput, SentLogUncheckedCreateWithoutCampaignInput>
  }

  export type SentLogUpdateWithWhereUniqueWithoutCampaignInput = {
    where: SentLogWhereUniqueInput
    data: XOR<SentLogUpdateWithoutCampaignInput, SentLogUncheckedUpdateWithoutCampaignInput>
  }

  export type SentLogUpdateManyWithWhereWithoutCampaignInput = {
    where: SentLogScalarWhereInput
    data: XOR<SentLogUpdateManyMutationInput, SentLogUncheckedUpdateManyWithoutCampaignInput>
  }

  export type SentLogScalarWhereInput = {
    AND?: SentLogScalarWhereInput | SentLogScalarWhereInput[]
    OR?: SentLogScalarWhereInput[]
    NOT?: SentLogScalarWhereInput | SentLogScalarWhereInput[]
    id?: IntFilter<"SentLog"> | number
    campaignId?: IntFilter<"SentLog"> | number
    sentType?: EnumSentTypeFilter<"SentLog"> | $Enums.SentType
    templateMessage?: StringFilter<"SentLog"> | string
    createdAt?: DateTimeFilter<"SentLog"> | Date | string
  }

  export type RecipientCreateWithoutUserInput = {
    campaign: CampaignCreateNestedOneWithoutRecipientInput
    receiveLogs?: ReceiveLogsCreateNestedManyWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutUserInput = {
    id?: number
    campaignId: number
    receiveLogs?: ReceiveLogsUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type RecipientCreateOrConnectWithoutUserInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutUserInput, RecipientUncheckedCreateWithoutUserInput>
  }

  export type RecipientCreateManyUserInputEnvelope = {
    data: RecipientCreateManyUserInput | RecipientCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecipientUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipientWhereUniqueInput
    update: XOR<RecipientUpdateWithoutUserInput, RecipientUncheckedUpdateWithoutUserInput>
    create: XOR<RecipientCreateWithoutUserInput, RecipientUncheckedCreateWithoutUserInput>
  }

  export type RecipientUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipientWhereUniqueInput
    data: XOR<RecipientUpdateWithoutUserInput, RecipientUncheckedUpdateWithoutUserInput>
  }

  export type RecipientUpdateManyWithWhereWithoutUserInput = {
    where: RecipientScalarWhereInput
    data: XOR<RecipientUpdateManyMutationInput, RecipientUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutRecipientInput = {
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRecipientInput = {
    id?: number
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRecipientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipientInput, UserUncheckedCreateWithoutRecipientInput>
  }

  export type CampaignCreateWithoutRecipientInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SentLog?: SentLogCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutRecipientInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SentLog?: SentLogUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutRecipientInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutRecipientInput, CampaignUncheckedCreateWithoutRecipientInput>
  }

  export type ReceiveLogsCreateWithoutRecipientInput = {
    logType: $Enums.LogType
    createdAt?: Date | string
  }

  export type ReceiveLogsUncheckedCreateWithoutRecipientInput = {
    id?: number
    logType: $Enums.LogType
    createdAt?: Date | string
  }

  export type ReceiveLogsCreateOrConnectWithoutRecipientInput = {
    where: ReceiveLogsWhereUniqueInput
    create: XOR<ReceiveLogsCreateWithoutRecipientInput, ReceiveLogsUncheckedCreateWithoutRecipientInput>
  }

  export type ReceiveLogsCreateManyRecipientInputEnvelope = {
    data: ReceiveLogsCreateManyRecipientInput | ReceiveLogsCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecipientInput = {
    update: XOR<UserUpdateWithoutRecipientInput, UserUncheckedUpdateWithoutRecipientInput>
    create: XOR<UserCreateWithoutRecipientInput, UserUncheckedCreateWithoutRecipientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipientInput, UserUncheckedUpdateWithoutRecipientInput>
  }

  export type UserUpdateWithoutRecipientInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpsertWithoutRecipientInput = {
    update: XOR<CampaignUpdateWithoutRecipientInput, CampaignUncheckedUpdateWithoutRecipientInput>
    create: XOR<CampaignCreateWithoutRecipientInput, CampaignUncheckedCreateWithoutRecipientInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutRecipientInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutRecipientInput, CampaignUncheckedUpdateWithoutRecipientInput>
  }

  export type CampaignUpdateWithoutRecipientInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SentLog?: SentLogUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SentLog?: SentLogUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ReceiveLogsUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ReceiveLogsWhereUniqueInput
    update: XOR<ReceiveLogsUpdateWithoutRecipientInput, ReceiveLogsUncheckedUpdateWithoutRecipientInput>
    create: XOR<ReceiveLogsCreateWithoutRecipientInput, ReceiveLogsUncheckedCreateWithoutRecipientInput>
  }

  export type ReceiveLogsUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ReceiveLogsWhereUniqueInput
    data: XOR<ReceiveLogsUpdateWithoutRecipientInput, ReceiveLogsUncheckedUpdateWithoutRecipientInput>
  }

  export type ReceiveLogsUpdateManyWithWhereWithoutRecipientInput = {
    where: ReceiveLogsScalarWhereInput
    data: XOR<ReceiveLogsUpdateManyMutationInput, ReceiveLogsUncheckedUpdateManyWithoutRecipientInput>
  }

  export type ReceiveLogsScalarWhereInput = {
    AND?: ReceiveLogsScalarWhereInput | ReceiveLogsScalarWhereInput[]
    OR?: ReceiveLogsScalarWhereInput[]
    NOT?: ReceiveLogsScalarWhereInput | ReceiveLogsScalarWhereInput[]
    id?: IntFilter<"ReceiveLogs"> | number
    recipientId?: IntFilter<"ReceiveLogs"> | number
    logType?: EnumLogTypeFilter<"ReceiveLogs"> | $Enums.LogType
    createdAt?: DateTimeFilter<"ReceiveLogs"> | Date | string
  }

  export type RecipientCreateWithoutReceiveLogsInput = {
    user: UserCreateNestedOneWithoutRecipientInput
    campaign: CampaignCreateNestedOneWithoutRecipientInput
  }

  export type RecipientUncheckedCreateWithoutReceiveLogsInput = {
    id?: number
    userId: number
    campaignId: number
  }

  export type RecipientCreateOrConnectWithoutReceiveLogsInput = {
    where: RecipientWhereUniqueInput
    create: XOR<RecipientCreateWithoutReceiveLogsInput, RecipientUncheckedCreateWithoutReceiveLogsInput>
  }

  export type RecipientUpsertWithoutReceiveLogsInput = {
    update: XOR<RecipientUpdateWithoutReceiveLogsInput, RecipientUncheckedUpdateWithoutReceiveLogsInput>
    create: XOR<RecipientCreateWithoutReceiveLogsInput, RecipientUncheckedCreateWithoutReceiveLogsInput>
    where?: RecipientWhereInput
  }

  export type RecipientUpdateToOneWithWhereWithoutReceiveLogsInput = {
    where?: RecipientWhereInput
    data: XOR<RecipientUpdateWithoutReceiveLogsInput, RecipientUncheckedUpdateWithoutReceiveLogsInput>
  }

  export type RecipientUpdateWithoutReceiveLogsInput = {
    user?: UserUpdateOneRequiredWithoutRecipientNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutReceiveLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type CampaignCreateWithoutSentLogInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Recipient?: RecipientCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutSentLogInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Recipient?: RecipientUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutSentLogInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutSentLogInput, CampaignUncheckedCreateWithoutSentLogInput>
  }

  export type CampaignUpsertWithoutSentLogInput = {
    update: XOR<CampaignUpdateWithoutSentLogInput, CampaignUncheckedUpdateWithoutSentLogInput>
    create: XOR<CampaignCreateWithoutSentLogInput, CampaignUncheckedCreateWithoutSentLogInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutSentLogInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutSentLogInput, CampaignUncheckedUpdateWithoutSentLogInput>
  }

  export type CampaignUpdateWithoutSentLogInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipient?: RecipientUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutSentLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Recipient?: RecipientUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type RecipientCreateManyCampaignInput = {
    id?: number
    userId: number
  }

  export type SentLogCreateManyCampaignInput = {
    id?: number
    sentType: $Enums.SentType
    templateMessage: string
    createdAt?: Date | string
  }

  export type RecipientUpdateWithoutCampaignInput = {
    user?: UserUpdateOneRequiredWithoutRecipientNestedInput
    receiveLogs?: ReceiveLogsUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    receiveLogs?: ReceiveLogsUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SentLogUpdateWithoutCampaignInput = {
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentLogUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentLogUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    sentType?: EnumSentTypeFieldUpdateOperationsInput | $Enums.SentType
    templateMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipientCreateManyUserInput = {
    id?: number
    campaignId: number
  }

  export type RecipientUpdateWithoutUserInput = {
    campaign?: CampaignUpdateOneRequiredWithoutRecipientNestedInput
    receiveLogs?: ReceiveLogsUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    receiveLogs?: ReceiveLogsUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type RecipientUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceiveLogsCreateManyRecipientInput = {
    id?: number
    logType: $Enums.LogType
    createdAt?: Date | string
  }

  export type ReceiveLogsUpdateWithoutRecipientInput = {
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiveLogsUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceiveLogsUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    logType?: EnumLogTypeFieldUpdateOperationsInput | $Enums.LogType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CampaignCountOutputTypeDefaultArgs instead
     */
    export type CampaignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipientCountOutputTypeDefaultArgs instead
     */
    export type RecipientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipientDefaultArgs instead
     */
    export type RecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReceiveLogsDefaultArgs instead
     */
    export type ReceiveLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReceiveLogsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SentLogDefaultArgs instead
     */
    export type SentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SentLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}